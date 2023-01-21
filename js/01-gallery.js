import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onImgClickCreateModal);

// Реализация делегирования на div.gallery и получение url большого изображения.

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// Открытие модального окна по клику на элементе галереи.

function onImgClickCreateModal(event) {
  event.preventDefault();

  const isItemImage = event.target.classList.contains("gallery__image");

  if (!isItemImage) {
    return;
  }

  const currentImgUrl = event.target.dataset.source;

  // Замена значения атрибута src элемента <img> в модальном окне перед открытием.

  const instance = basicLightbox.create(
    `<img src="${currentImgUrl}" width="800" height="auto"/>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY = "Escape";

    const isEscKey = event.code === ESC_KEY;

    if (isEscKey) {
      instance.close();
    }
  }
}

console.log(galleryItems);
