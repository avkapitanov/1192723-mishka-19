document.addEventListener("DOMContentLoaded", function(){
  let toggleBtn = document.querySelector('.main-header__toggle');
  let header = document.querySelector('.main-header');
  let menuList = document.querySelector('.dropdown-list');
  let searchText = document.querySelector('.main-header__search-text');

  header.classList.remove('main-header--nojs');
  menuList.classList.remove('dropdown-list--nojs');

  toggleBtn.addEventListener("click", function (evt) {
    //evt.preventDefault();
    header.classList.toggle('main-header--opened');
    menuList.classList.toggle('dropdown-list--opened');
  });
});
