import { PixabayAPI } from './fetchImages';
import { Notify } from 'notiflix';
import { createGalleryMarkup } from './createMarkup';
import { lightboxGallery } from './simpleLightbox';

const searchService = new PixabayAPI();
export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  searchBox: document.querySelector('.js-search-box'),
  searchBtn: document.querySelector('.js-search-button'),
  gallery: document.querySelector('.gallery'),
  observerMarker: document.querySelector('.observer-marker'),
};

const hendleSearchOnSubmit = e => {
  e.preventDefault();
  clearGalleryMarkup();

  searchService.resetPage();
  searchService.query = refs.searchBox.value.trim();

  if (refs.searchBox.value === '' || refs.searchBox.value === ' ') {
    Notify.failure('Please fill out the search field');
    return;
  }

  fetchImages();
};

const fetchImages = async () => {
  try {
    const data = await searchService.getImages();

    if (data.hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    if (searchService.pageNumber === 1) {
      Notify.success(`Hooray! We found ${data.totalHits} images.`);
    }

    insertGalleryMarkup(data);
    observer.observe(refs.observerMarker);
    stopInfScroll(data);
  } catch (error) {
    Notify.failure(
      `Ooops, something went wrong...
    Server says: ${error.message}`
    );
  }
};

const insertGalleryMarkup = data => {
  const markup = createGalleryMarkup(data.hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightboxGallery.refresh();
};

const clearGalleryMarkup = () => {
  refs.gallery.innerHTML = '';
};

// Below is the code that handles infinite scroll

const handleObserver = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
      searchService.incrementPage();
      fetchImages();
    }
  });
};

const observer = new IntersectionObserver(handleObserver, {
  rootMargin: '500px',
});

const stopInfScroll = data => {
  if (data.totalHits === refs.gallery.children.length) {
    observer.disconnect();
    Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
};

refs.searchForm.addEventListener('submit', hendleSearchOnSubmit);
