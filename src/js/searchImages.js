import { PixabayAPI } from './fetchImages';
import { Notify } from 'notiflix';
import { createGalleryMarkup } from './createMarkup';

const searchService = new PixabayAPI();
export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  searchBox: document.querySelector('.js-search-box'),
  searchBtn: document.querySelector('.js-search-button'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', hendleSearchOnSubmit);
refs.loadMoreBtn.addEventListener('click', loadMoreOnClick);

function hendleSearchOnSubmit(e) {
  e.preventDefault();
  clearGalleryMarkup();

  searchService.resetPage();
  searchService.query = refs.searchBox.value;

  fetchImages();
}

function loadMoreOnClick() {
  searchService.incrementPage();
  fetchImages();
}

function fetchImages() {
  searchService
    .getImages()
    .then(data => {
      console.log(data);

      if (data.hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      insertGalleryMarkup(data);
      refs.loadMoreBtn.classList.remove('visually-hidden');
    })
    .catch(error => console.warn(error));
}

function insertGalleryMarkup(data) {
  const markup = createGalleryMarkup(data.hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
  refs.loadMoreBtn.classList.add('visually-hidden');
}
