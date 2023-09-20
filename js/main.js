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