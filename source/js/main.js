
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

(function(window, document, undefined) {
  slidr.create('slidr-div', {
  
  breadcrumbs: true,
  controls: 'none',
  direction: 'horizontal',
  fade: true,
  keyboard: true,
  overflow: true,
  pause: false,
  timing: { 'linear': '0.5s ease-in' },
  touch: true,
  transition: 'linear'
}).add('h', ['one', 'two', 'three','one']).auto(10000);
})(window, document);

// (function(window, document, undefined) {
//   var snips = document.getElementsByClassName('article__text');
//   for(var k = 0, length3 = snips.length; k < length3; k++){
//     $clamp( snips[k], {clamp: 3});
//   }
//   // $clamp(myHeader, {clamp: 3});
// })(window, document);