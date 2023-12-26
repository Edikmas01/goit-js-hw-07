import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

let currentImage = '';
let instance;

const createGallery = ({ preview, original, description }) => {
  return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    `;
};

const galleryMarkup = galleryItems.map(createGallery).join("");

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);


gallery.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.parentElement.className !== "gallery__link") {
        return;
    }

    currentImage = e.target.src;
    instance = basicLightbox.create(`
            <img src="${currentImage}" alt="" />
        `);
    instance.show();
});

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && instance) {
        instance.close();
    }
});

console.dir(document);


