import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';

const toTopButton = document.querySelector('.js-to-top');
const toTopIcon = icon(faCircleUp);

toTopButton.appendChild(toTopIcon.node[0]);

const showBtnOnScroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTopButton.classList.remove('untouchable');
  } else {
    toTopButton.classList.add('untouchable');
  }
  console.log('scroll');
};

const returnToTopOnClick = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener('scroll', debounce(showBtnOnScroll, 250));
toTopButton.addEventListener('click', returnToTopOnClick);
