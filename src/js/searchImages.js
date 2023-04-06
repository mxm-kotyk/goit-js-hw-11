// Uncomment the code below, code in formStyles.js and button in gallery.html to enable load-more-button mode
// Don't forget to comment out code in searchImagesInfScroll.js and "import { refs } from './searchImagesInfScroll'" in formStyles.js to avoid errors

// import { PixabayAPI } from './fetchImages';
// import { Notify } from 'notiflix';
// import { createGalleryMarkup } from './createMarkup';
// import { lightboxGallery } from './simpleLightbox';

// const searchService = new PixabayAPI();
// export const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   searchBox: document.querySelector('.js-search-box'),
//   searchBtn: document.querySelector('.js-search-button'),
//   loadMoreBtn: document.querySelector('.load-more'),
//   gallery: document.querySelector('.gallery'),
// };

// const hendleSearchOnSubmit = e => {
//   e.preventDefault();
//   clearGalleryMarkup();

//   searchService.resetPage();
//   searchService.query = refs.searchBox.value.trim();

//   if (refs.searchBox.value === '' || refs.searchBox.value === ' ') {
//     Notify.failure('Please fill out the search field');
//     return;
//   }

//   fetchImages();
// };

// const loadMoreOnClick = () => {
//   searchService.incrementPage();
//   fetchImages();
// };

// const hideloadMoreBtnOnLastPage = data => {
//   if (data.totalHits === refs.gallery.children.length) {
//     refs.loadMoreBtn.classList.add('visually-hidden');
//     Notify.warning(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
// };

// const fetchImages = async () => {
//   try {
//     const data = await searchService.getImages();

//     if (data.hits.length === 0) {
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       return;
//     }

//     if (searchService.pageNumber === 1) {
//       Notify.success(`Hooray! We found ${data.totalHits} images.`);
//     }

//     insertGalleryMarkup(data);
//     refs.loadMoreBtn.classList.remove('visually-hidden');
//     hideloadMoreBtnOnLastPage(data);
//     scrollViewport(getHeight());
//   } catch (error) {
//     Notify.failure(
//       `Ooops, something went wrong...
//     Server says: ${error.message}`
//     );
//   }
// };

// const insertGalleryMarkup = data => {
//   const markup = createGalleryMarkup(data.hits);
//   refs.gallery.insertAdjacentHTML('beforeend', markup);
//   lightboxGallery.refresh();
// };

// const clearGalleryMarkup = () => {
//   refs.gallery.innerHTML = '';
//   refs.loadMoreBtn.classList.add('visually-hidden');
// };

// const getHeight = () => {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();
//   return cardHeight;
// };

// const scrollViewport = height => {
//   if (searchService.pageNumber > 1) {
//     window.scrollBy({
//       top: height * 2,
//       behavior: 'smooth',
//     });
//   }
// };

// refs.searchForm.addEventListener('submit', hendleSearchOnSubmit);
// refs.loadMoreBtn.addEventListener('click', loadMoreOnClick);
