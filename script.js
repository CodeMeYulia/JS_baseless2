function myMessage(){
    console.log('Я учу Java Script');
}
myMessage();

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

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

  