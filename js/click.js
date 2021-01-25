var sliderBefore = document.querySelector (".image--before");  //находим img before 
var sliderAfter = document.querySelector (".image--after");  //находим img after 

var ButtonBefore = document.querySelector (".slider-button--before");  //находим кнопку before
var ButtonAfter = document.querySelector (".slider-button--after");  //находим кнопку after

ButtonBefore.addEventListener("click",function(evt) {

  sliderBefore.style.width = "100%";
  sliderAfter.style.width = "0%";

  console.log('before');
});

ButtonAfter.addEventListener("click",function(evt) {

  sliderAfter.style.width = "100%";
  sliderBefore.style.width = "0%";

  console.log('after');
});
