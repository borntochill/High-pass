document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76017704837505, 37.61875849785612],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13
    });
    let myPlacemark = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [0, 0]
    });

    myMap.geoObjects
      .add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
  };
  // burger
  let openBurger = document.querySelector('.nav__burger')
  let closeBurger = document.querySelector('.nav__btn-close');
  let navBlock = document.querySelector('.nav__mobile');

  openBurger.addEventListener('click', function () {
    navBlock.classList.add('nav__mobile--active');
  })
  closeBurger.addEventListener('click', function () {
    navBlock.classList.remove('nav__mobile--active');
  })
  // searchForm
  let openSearch = document.querySelector('.header__btn')
  let closeBtnSearch = document.querySelector('.form__btn-close');
  let SearchBlock = document.querySelector('.form');

  openSearch.addEventListener('click', function () {
    SearchBlock.classList.add('form--active');
  })
  closeBtnSearch.addEventListener('click', function () {
    SearchBlock.classList.remove('form--active');
  })

  // contact
  let closeBtn = document.querySelector('.contact__btn');
  let closedBlock = document.querySelector('.contact__content');

  closeBtn.addEventListener('click', function () {
    closedBlock.classList.add('contact__content-close');
  })

})
