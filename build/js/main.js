$(document).ready(function() {
  //плагин для обрезки длинного текста в блоке
  $(".article__wrapper").dotdotdot({
    height: 200
  });
  $(".figure__caption").dotdotdot({
    height: 150
  });
  //полифилл для placeholder в IE9
  $('input, textarea').inputPlaceholderPolyfill();

  //добавляем св-во hasAttr в библиотеку Jquery
  $.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
  };
  //ссылка не работает, если у блока с картинкой есть атрибут disabled
  $(".gallery__item").on("click", function(event) {
    if ($(this).hasAttr("disabled")) {
      return false;
    }
  });
  //переключени атрибута disabled в зависимости от радиокнопки
  $('.gallery__filter').on('focus', function() {
    var select = $(this).attr('id');
    if (select === 'select-all') {
      $('.gallery__item').removeAttr('disabled');
    } else {
      $('.gallery__item').each(function(indx, element) {
        var $element = $(element);
        var data = $element.data('item');
        if (data === select) {
          $element.removeAttr('disabled');
        } else {
          $element.attr('disabled', 'disabled')
        }
      })
    }

  })
});


//скрипт для навигационного меню

(function(window, document, undefined) {
  var button = document.getElementById('toggle');
  var list = document.getElementById('menu');

  //скрываем меню при загрузке страницы
  if (list.classList)
    list.classList.add('main-nav__list--hidden');
  else
    list.className += ' ' + 'main-nav__list--hidden';

  button.addEventListener('click', function() {

    //переключаем класс у кнопки с бургером
    if (button.classList) {
      button.classList.toggle('main-nav__button--active');
    } else {
      var buttonClasses = button.className.split(' ');
      var existingIndex = buttonClasses.indexOf('main-nav__button--active');

      if (existingIndex >= 0)
        buttonClasses.splice(existingIndex, 1);
      else
        buttonClasses.push('main-nav__button--active');

      button.className = buttonClasses.join(' ');
    }

    //переключаем класс у меню
    if (list.classList) {
      list.classList.toggle('main-nav__list--hidden');
    } else {
      var listClasses = list.className.split(' ');
      var existingIndex1 = listClasses.indexOf('main-nav__list--hidden');

      if (existingIndex1 >= 0)
        listClasses.splice(existingIndex1, 1);
      else
        listClasses.push('main-nav__list--hidden');

      list.className = listClasses.join(' ');
    }

  });

})(window, document);




//скрипт для главного слайдера
//сторонний плагин slidr.js
//!!! в IE11 глюк с кнопками переключения слайдера(не работают), баг самого слайдера !!!
(function(window, document, undefined) {
  slidr.create('slidr-div', {
    breadcrumbs: true,
    controls: 'none',
    direction: 'horizontal',
    fade: true,
    keyboard: true,
    touch: true,
    overflow: true,
    pause: true,
    timing: {
      'linear': '0.5s ease-in'
    },
    touch: true,
    transition: 'linear'
  }).add('h', ['one', 'two', 'three', 'one']).auto(5000);
})(window, document);
