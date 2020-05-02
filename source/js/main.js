document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(function () {
    if (document.querySelector(".contacts__map")) {
      var myMap = new ymaps.Map("map", {
          center: [59.938635, 30.323118],
          zoom: 16,
          controls: []
        }, {
          searchControlProvider: "yandex#search"
        }),

        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/icon-map-pin.svg",
          iconImageSize: [66, 100],
          iconImageOffset: [-33, -100]
        });

      myMap.geoObjects
        .add(myPlacemark);
    }
  });


  let toggleBtn = document.querySelector(".main-header__toggle");
  let header = document.querySelector(".main-header");

  if (header) {
    header.classList.remove("main-header--nojs");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      header.classList.toggle("main-header--opened");
    });
  }

  let formLink = document.querySelector(".week-product__buy-btn");
  let popup = document.querySelector(".modal");
  let overlay = document.querySelector(".modal__overlay");

  if (formLink) {
    formLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal--opened");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal--opened");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--opened")) {
        popup.classList.remove("modal--opened");
      }
    }
  });

});
