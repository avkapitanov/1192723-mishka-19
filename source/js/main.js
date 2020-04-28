document.addEventListener("DOMContentLoaded", function(){
  let toggleBtn = document.querySelector('.main-header__toggle');
  let header = document.querySelector('.main-header');

  header.classList.remove('main-header--nojs');

  toggleBtn.addEventListener("click", function () {
    header.classList.toggle('main-header--opened');
  });


  let formLink = document.querySelector(".week-product__buy-btn");
  let popup = document.querySelector(".modal");
  let overlay = document.querySelector(".modal__overlay");

  formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--opened");
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--opened");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--opened")) {
        popup.classList.remove("modal--opened");
      }
    }
  });

});
