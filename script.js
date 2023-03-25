let offset = 0;
const sliderLine = document.querySelector('.gallery__slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
  offset += 350;
  if (offset > 700) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px'; 
})

document.querySelector('.slider-prew').addEventListener('click', function(){
    offset -= 350;
    if (offset <0) {
      offset = 700;
    }
    sliderLine.style.left = -offset + 'px'; 
  })

  function myMessage(){
    console.log("Я учу JavaScript!")
  }
//   myMessage();