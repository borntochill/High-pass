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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgeW1hcHMucmVhZHkoaW5pdCk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0YsuXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XG4gICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiy5cbiAgICAgIC8vINCf0L7RgNGP0LTQvtC6INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOOiDCq9GI0LjRgNC+0YLQsCwg0LTQvtC70LPQvtGC0LDCuy5cbiAgICAgIC8vINCn0YLQvtCx0Ysg0L3QtSDQvtC/0YDQtdC00LXQu9GP0YLRjCDQutC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiyDQstGA0YPRh9C90YPRjixcbiAgICAgIC8vINCy0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INCe0L/RgNC10LTQtdC70LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgICAgY2VudGVyOiBbNTUuNzYwMTc3MDQ4Mzc1MDUsIDM3LjYxODc1ODQ5Nzg1NjEyXSxcbiAgICAgIC8vINCj0YDQvtCy0LXQvdGMINC80LDRgdGI0YLQsNCx0LjRgNC+0LLQsNC90LjRjy4g0JTQvtC/0YPRgdGC0LjQvNGL0LUg0LfQvdCw0YfQtdC90LjRjzpcbiAgICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxuICAgICAgem9vbTogMTNcbiAgICB9KTtcbiAgICBsZXQgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43Njk1MzQ1Njg5ODIyOSwgMzcuNjM5OTg1NDk5OTk5OThdLCB7fSwge1xuICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgaWNvbkltYWdlSHJlZjogJ2ltZy9tYXAuc3ZnJyxcbiAgICAgIGljb25JbWFnZVNpemU6IFsxMiwgMTJdLFxuICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbMCwgMF1cbiAgICB9KTtcblxuICAgIG15TWFwLmdlb09iamVjdHNcbiAgICAgIC5hZGQobXlQbGFjZW1hcmspO1xuXG4gICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gIH07XG4gIC8vIGJ1cmdlclxuICBsZXQgb3BlbkJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J1cmdlcicpXG4gIGxldCBjbG9zZUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J0bi1jbG9zZScpO1xuICBsZXQgbmF2QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tb2JpbGUnKTtcblxuICBvcGVuQnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdkJsb2NrLmNsYXNzTGlzdC5hZGQoJ25hdl9fbW9iaWxlLS1hY3RpdmUnKTtcbiAgfSlcbiAgY2xvc2VCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbmF2QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19tb2JpbGUtLWFjdGl2ZScpO1xuICB9KVxuICAvLyBzZWFyY2hGb3JtXG4gIGxldCBvcGVuU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnRuJylcbiAgbGV0IGNsb3NlQnRuU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J0bi1jbG9zZScpO1xuICBsZXQgU2VhcmNoQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4gIG9wZW5TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgU2VhcmNoQmxvY2suY2xhc3NMaXN0LmFkZCgnZm9ybS0tYWN0aXZlJyk7XG4gIH0pXG4gIGNsb3NlQnRuU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIFNlYXJjaEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tLWFjdGl2ZScpO1xuICB9KVxuXG4gIC8vIGNvbnRhY3RcbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2J0bicpO1xuICBsZXQgY2xvc2VkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9fY29udGVudCcpO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2NvbnRlbnQtY2xvc2UnKTtcbiAgfSlcblxufSlcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
