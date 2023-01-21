### goit-js-hw-07

## JavaScript course homework. Document Object Model. Event propagation. Event bubbling. Throttle &amp; Debounce. Lazysizes

[![Image from Gyazo](https://i.gyazo.com/6d10d7c2a1e6beaf9d97cd7ae1a049db.png)](https://gyazo.com/6d10d7c2a1e6beaf9d97cd7ae1a049db)

## Задание 1 - галерея изображений

Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Выполняй эту задачу в файлах `01-gallery.html` и `01-gallery.js`. Разбей его на несколько подзаданий:

1. Создание и рендер разметки на основании массива данных `galleryItems` и предоставленного шаблона элемента галереи.
2. Реализация делегирования на `div.gallery` и получение `url` большого изображения.
3. Подключение скрипта и стилей библиотеки модального окна [basicLightbox](https://basiclightbox.electerious.com/). Используй [CDN сервис jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) и добавь в проект ссылку на минифицированные (`.min`) файлы библиотеки.
4. Открытие модального окна по щелчку на элементе галереи. Для этого ознакомьтесь с [документацией](https://github.com/electerious/basicLightbox#readme) и [примерами](https://basiclightbox.electerious.com/).
5. Замена значения атрибута `src` элемента `<img>` в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки [basicLightbox](https://basiclightbox.electerious.com/).

### Разметка элемента галереи

Ссылка на оригинальное изображение должна храниться в data-атрибуте `source` на элементе `<img>`, и указываться в `href` ссылке. Не добавляй другие HTML теги или CSS классы, кроме содержащихся в этом шаблоне.

```html
<div class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
     <img
       class="gallery__image"
       src="small-image.jpg"
       data-source="large-image.jpg"
       alt="Image description"
     />
   </a>
</div>
``

Обрати внимание на то, что изображение обернуто ссылкой, так что по клику по умолчанию пользователь будет перенаправлен на другую страницу. Запрещайте это поведение по умолчанию.

### Закрытие с клавиатуры

> ⚠️ Следующий функционал не обязателен для сдачи задания, но будет хорошей дополнительной практикой.
Добавь закрытие модального окна по нажатию клавиши `Escape`. Сделай так, чтобы прослушивание клавиатуры было только до открытого модального окна. Библиотека [basicLightbox](https://basiclightbox.electerious.com/) содержит метод для программного закрытия модального окна.

[![Image from Gyazo](https://i.gyazo.com/d1caa83b90eb7181e456e9da05b5f325.gif)](https://gyazo.com/d1caa83b90eb7181e456e9da05b5f325)

## Задание 2 - библиотека `SimpleLightbox`

Сделай такую же галерею как в первой задаче, но используя библиотеку [SimpleLightbox](https://simplelightbox.com/), которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений с помощью клавиатуры.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

Необходимо немного изменить разметку карты галереи, используй этот шаблон.

```html
<a class="gallery__item" href="large-image.jpg">
   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
``

Выполняй эту задачу в файлах `02-lightbox.html` и `02-lightbox.js`. Разбей его на несколько подзаданий:

1. Создание и рендер разметки на основании массива данных `galleryItems` и предоставленного шаблона элемента галереи. Используй готовый код из первого задания.
2. Подключение скрипта и стилей библиотеки, используя [CDN cdnjs](https://cdnjs.com/libraries/simplelightbox). Необходимо добавить ссылку на два файла: `simple-lightbox.min.js` и `simple-lightbox.min.css`.
3. Инициализация библиотеки после создания и добавления элементов галереи в div.gallery. Для этого ознакомься с документацией [SimpleLightbox](https://simplelightbox.com/) – прежде всего секции «Usage» и «Markup».
4. Посмотри в документации секцию Options и добавь отображение подписей к изображениям с атрибута `alt`. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

[![Image from Gyazo](https://i.gyazo.com/6cb20ecea25b105fc6b3ac4e9272c0ee.gif)](https://gyazo.com/6cb20ecea25b105fc6b3ac4e9272c0ee)
