import { icon } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { refs } from './searchImagesInfScroll';
// import { refs } from './searchImages';

const searchIcon = icon(faMagnifyingGlass);

refs.searchBtn.appendChild(searchIcon.node[0]);

refs.searchBox.addEventListener('focusin', toggleClassOnFocus);
refs.searchBox.addEventListener('focusout', toggleClassOnFocus);

function toggleClassOnFocus() {
  refs.searchForm.classList.toggle('focused');
}
