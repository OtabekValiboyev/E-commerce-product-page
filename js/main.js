const modifiers = {
  ImgThumbnailActive: 'img-showcase__thumbnail--active'
};

// HEADER CARD
const elHeaderCardLink = document.querySelector('.js-header__cart-link');
const elHeaderModal = document.querySelector('.header__modal');

if (elHeaderCardLink) {
  elHeaderCardLink.addEventListener('click', function () {
    elHeaderModal.classList.toggle('header__modal--open')
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