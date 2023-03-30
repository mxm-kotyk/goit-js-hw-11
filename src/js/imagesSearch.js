import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const refs = {
  searchBox: document.querySelector('.js-search-box'),
  searchBtn: document.querySelector('.js-search-button'),
  gallery: document.querySelector('.gallery'),
};

// Add icon to button
const searchIcon = icon(faMagnifyingGlass);
refs.searchBtn.appendChild(searchIcon.node[0]);
