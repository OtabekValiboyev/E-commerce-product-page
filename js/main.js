const modifiers = {
  LightboxOpen: 'lightbox--open',
  HeaderModalOpen: 'header__modal--open',
  ImgThumbnailActive: 'img-showcase__thumbnail--active'
};

// HEADER CARD
const elHeaderCardLink = document.querySelector('.js-header__cart-link');
const elHeaderModal = document.querySelector('.header__modal');

if (elHeaderCardLink) {
  elHeaderCardLink.addEventListener('click', function () {
    elHeaderModal.classList.toggle(modifiers.HeaderModalOpen)
  });
};

// SITE SHOWCASE
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButtons = elProductPageGallery.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgShowcaseThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');


elsImgShowcaseThumbnailButtons.forEach(function (elImgButton) {
  elImgButton.addEventListener('click', function () {

    elsImgShowcaseThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive);
    });

    elImgButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

    elImgShowcaseActiveImg.src = elImgButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elImgButton.dataset.imgShowcaseBig} 1x, ${elImgButton.dataset.imgShowcaseRetina} 2x`;

    // console.log(elImgButton.dataset.imgShowcaseBig);
    // console.log(elImgButton.dataset.imgShowcaseRetina);
  });
});


// LIGHTBOX
const elLightboxButton = document.querySelector('.js-lightbox-toggler');
const elLightbox = document.querySelector('.lightbox');
const elLightboxClose = document.querySelector('.js-lightbox-close');

if (elLightboxButton) {
  elLightboxButton.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.LightboxOpen);
  });
};

if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.LightboxOpen);
  });
};

const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButtons = elLightbox.querySelectorAll('.js-lightbox-img-showcase-thumbnail-button');
const elsImgLightboxThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');


// THUMBNAIL CLICK
elsImgLightboxThumbnailButtons.forEach(function (elImgButton) {
  elImgButton.addEventListener('click', function () {

    elsImgLightboxThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive);
    });

    elImgButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

    elImgLightboxActiveImg.src = elImgButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elImgButton.dataset.imgShowcaseBig} 1x, ${elImgButton.dataset.imgShowcaseRetina} 2x`;

  });
});

// LIGHTBOX CONTROLLER
const elLightboxControlPrev = elLightbox.querySelector('.js-img-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-img-control-next');

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function () {

    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
    elActiveItem.classList.remove(modifiers.ImgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsImgLightboxThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }
    elNextActiveItem.classList.add(modifiers.ImgThumbnailActive)
    // elActiveItem.nextElementSibling.classList.add(modifiers.ImgThumbnailActive);
    // elsImgLightboxThumbnail[0].classList.add(modifiers.ImgThumbnailActive);

    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
  });
};

if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function () {

    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
    elActiveItem.classList.remove(modifiers.ImgThumbnailActive);

    let elPrevActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elPrevActiveItem = elsImgLightboxThumbnail[elsImgLightboxThumbnail.length -1];
    } else {
      elPrevActiveItem = elActiveItem.previousElementSibling;
    }
    elPrevActiveItem.classList.add(modifiers.ImgThumbnailActive)
    // elActiveItem.nextElementSibling.classList.add(modifiers.ImgThumbnailActive);
    // elsImgLightboxThumbnail[0].classList.add(modifiers.ImgThumbnailActive);

    elImgLightboxActiveImg.src = elPrevActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elPrevActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elPrevActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
  });
};


// PAGE INFO CONTROL
const elProductInfoQtyDecrementButton = document.querySelector(".js-product-info-quantity-decrement-button");
const elProductInfoQtyIncrementButton = document.querySelector(".js-product-info-quantity-increment-button");
const elProductInfoQty = document.querySelector('.product-info__quantity');

if (elProductInfoQtyIncrementButton) {
  elProductInfoQtyIncrementButton.addEventListener('click', function () {

    elProductInfoQty.textContent = parseInt(elProductInfoQty.textContent, 10) + 1;
  });
};

if (elProductInfoQtyDecrementButton) {
  elProductInfoQtyDecrementButton.addEventListener('click', function () {

    const qty = parseInt(elProductInfoQty.textContent, 10);

    if (qty > 0) {
      elProductInfoQty.textContent = qty - 1;
    };

  });
};