// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryItemWrapper = document.querySelector('.gallery');

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