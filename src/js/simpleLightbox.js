import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightboxGallery = new SimpleLightbox('.photo-card a', {
  animationSpeed: 150,
  fadeSpeed: 200,
});
