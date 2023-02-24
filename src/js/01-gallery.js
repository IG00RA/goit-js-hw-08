// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem = document.querySelector('.gallery');
const previewImg = galleryItems.reduce((acc, item) => {
  return (acc += `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`);
}, '');

galleryElem.insertAdjacentHTML('beforeend', previewImg);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
