const elHeaderCardLink = document.querySelector('.js-header__cart-link');
const elHeaderModal = document.querySelector('.header__modal');

if (elHeaderCardLink) {
  elHeaderCardLink.addEventListener('click', function () {
    elHeaderModal.classList.toggle('header__modal--open')
  });
}