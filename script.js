
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


function page4Animation(){

var elemC= document.querySelector("#elem-container");
var fix=document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter",function(){
    fix.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fix.style.display="none"

})

// var elem1=document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image=elem1.getAttribute("data-image")
//     fix.style.backgroundImage=`url(${image})`
// })

var elems= document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image =  e.getAttribute("data-image")
        fix.style.backgroundImage=`url(${image})`
    })
})

}

function swiperAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,        // Show 3 slides at a time (adjust as needed)
        centeredSlides: true,    // Keep the active slide centered
        spaceBetween: 50,        // Space between slides
        loop: true,              // Infinite loop
        grabCursor: true,        // Makes the swiper act like a grabable slider
        initialSlide: 1          // Start on the 2nd slide (center one)
    });
    
}

function menu_responsive_animation(){
    swiperAnimation()
page4Animation()

var menu =document.querySelector("nav h3")
var full=document.querySelector("#full-scr")
var navimg=document.querySelector("nav img")
var flag =0

menu.addEventListener("click",function(){
    if(flag==0){
    full.style.top=0
    navimg.style.opacity=0
    flag=1
    }
    else{
        full.style.top="-100%"
        navimg.style.opacity=1
        flag=0
    }

})
}

function loaderAnimation(){
    var loader=document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)

}
setInterval(() => {
    console.log(document.visibilityState);
}, 1000);


loaderAnimation()
page4Animation()
swiperAnimation()
menu_responsive_animation()