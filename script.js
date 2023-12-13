let sliderInner = document.querySelector(".slider-inner");

let index = 0;
let images = sliderInner.querySelectorAll(img);

setInterval(function(){
    let percentage = index * -100;
    sliderInner.style.transform = "translateX("+ percentage +" %)"
    if(index > images.length-1){
        index = 0;
    }
    index ++;
}, 1000);