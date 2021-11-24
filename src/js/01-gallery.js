// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemWrapper = document.querySelector('.gallery');

galleryItemWrapper.addEventListener('click', openGallary);
galleryItemWrapper.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                
                    <a class="gallery__link" href="${original}">
                        <img 
                        class="gallery__image"
                        src="${preview}"                       
                        alt="${description}"/>
                    </a>
                 `;
        })
        .join(' ');
}

function openGallary(e) {
    if (e.target.closest('.gallery__link')) {
        e.preventDefault();
    }
}
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    showCounter: false,
    scrollZoom: false,
});