if ("NodeList" in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.ymaps) {
    ymaps.ready(function () {
      var mapWrapper = document.querySelector(".contacts__map");
      if (mapWrapper) {
        mapWrapper.classList.remove('contacts__map--nojs');
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
  }

  var toggleBtn = document.querySelector(".main-header__toggle");
  var header = document.querySelector(".main-header");

  if (header) {
    header.classList.remove("main-header--nojs");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      header.classList.toggle("main-header--opened");
    });
  }

  var formLink = document.querySelector(".week-product__buy-btn");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__overlay");

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

  var productBuyBtn = document.querySelectorAll(".product__buy");

  productBuyBtn.forEach(function(buyBtn) {
    buyBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal--opened");
    })
  });
});
