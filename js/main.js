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
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButtons = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgShowcaseThumbnail = document.querySelectorAll('.js-img-showcase-thumbnail');


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
const elsImgLightboxThumbnail = elLightbox.querySelectorAll('.js-img-showcase-thumbnail');


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

    const elLightboxActive = elLightbox.querySelector('.js-img-showcase-thumbnail--active');

    elLightboxActive.classList.remove(modifiers.ImgThumbnailActive)

  });
};