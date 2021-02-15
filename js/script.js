// const count = document.querySelectorAll(".counter-input");

const buttonPlus = document.querySelectorAll("[data-da='plus']");

const buttonMinus = document.querySelectorAll("[data-da='minus']");


buttonPlus.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.target.parentNode.querySelector("span").innerHTML =
      Number(e.target.parentNode.querySelector("span").innerHTML) + 1;
  });
});

buttonMinus.forEach((elem) => {      //Перебор коллекции методом forEach и запись в переменную elem
  elem.addEventListener("click", (e) => { // добавить слушателя событий по клику на элемент коллекции и запустить функцию
    e.target.parentNode.querySelector("span").innerHTML =
      Number(e.target.parentNode.querySelector("span").innerHTML) - 1; // найти родителя в родителе элемента по которому происходит событие, обратиться к элементу span находящемуся в родителе и вывести в span число 
  });
});


// const btnColor = document.querySelectorAll('.color-button');
// const img = document.querySelectorAll('.card-image');

// btnColor.forEach((elem) =>{
  // elem.addEventListener('click', (e) => {
    // img.classList.add('img-active');
  // });
// });
$('.color-button').on('click', function(e) {

  e.preventDefault();

  $($(this).siblings()).removeClass("color-active");
  $($(this).parent().siblings().find("a")).removeClass("img-active")

//   $('.color-button').removeClass('color-active'); // При клике удаляем класс active
//   $('.card-image').removeClass('img-active');

  $(this).addClass('color-active'); //При клике по табу добавляем кдасс active
  $($(this).attr('href')).addClass('img-active'); // Добавляем атрибут табу и активируем соответствующую форму     "images/arrow-left-black.svg"

});
