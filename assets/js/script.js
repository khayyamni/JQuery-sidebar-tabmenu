
let leftIcon = $(".slider-area .slider .icons i:nth-child(1)")
let rightIcon = $(".slider-area .slider .icons i:nth-child(2)")











$(function(){


leftIcon.click(function(){

    let activeSlider = $(".active-slider");
    if(activeSlider.prev().length != 0){
        activeSlider.removeClass("active-slider");
        activeSlider.prev().addClass("active-slider");
    }else{
        activeSlider.removeClass("active-slider");
        activeSlider.parent().children().last().addClass("active-slider");
    }

})




rightIcon.click(function(){
    let activeSlider = $(".active-slider");
    if(activeSlider.next().length != 0){
        activeSlider.removeClass("active-slider");
        activeSlider.next().addClass("active-slider");
    }else{
        activeSlider.removeClass("active-slider");
        activeSlider.parent().children().first().addClass("active-slider");
    }

})





setInterval(() => {


    let activeSlider = $(".active-slider");
    if(activeSlider.prev().length != 0){
        activeSlider.removeClass("active-slider");
        activeSlider.prev().addClass("active-slider");
    }else{
        activeSlider.removeClass("active-slider");
        activeSlider.parent().children().last().addClass("active-slider");
    }

}, 1500);



})