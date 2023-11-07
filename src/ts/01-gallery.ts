import { GallItems, galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem: HTMLDivElement | null = document.querySelector('.gallery');
const previewImg: string = galleryItems.reduce(
  (acc: string, item: GallItems): string => {
    return (acc += `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`);
  },
  ''
);

galleryElem?.insertAdjacentHTML('beforeend', previewImg);

new SimpleLightbox('.gallery a', { captionDelay: 250 });
