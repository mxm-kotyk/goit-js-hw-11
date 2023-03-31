import { PixabayAPI } from './fetchImages';
import { createGalleryMarkup } from './createMarkup';

const searchService = new PixabayAPI();
export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  searchBox: document.querySelector('.js-search-box'),
  searchBtn: document.querySelector('.js-search-button'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', hendleSearchOnSubmit);

function hendleSearchOnSubmit(e) {
  e.preventDefault();
  const searchQuery = refs.searchBox.value;

  searchService
    .getImages(searchQuery)
    .then(data => {
      console.log(data);
      const markup = createGalleryMarkup(data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.warn(error));
}
