const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

// se pone como const porque ambos van a cambiar mas adelante,para los botones
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


//se pone "afterbenig", y slidersectionlast para que puedan usarce el efecto infinito, se inserta el  ya que vamos a agregar un elemento 
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

//creamos las funciones
function Next() {
 let sliderSectionFist = document.querySelectorAll(".slider__section")[0]; 
 //le agregamos estilos
 slider.style.marginLeft = "-200%";
 slider.style.transition = "all 0.5s";

 setTimeout(function () {
     slider.style.transition ="none";
     slider.insertAdjacentElement('beforeend', sliderSectionFist);
     slider.style.marginLeft ="-100%";
     
 },500);
}

//creamos las funciones
function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section"); 
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    //le agregamos estilos
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    
   
    setTimeout(function () {
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft ="-100%";
        
    },500);
   }

btnRight.addEventListener('click', function () {
    Next();
    
});

btnLeft.addEventListener('click', function () {
    Prev();
    
});

setInterval(function()  {
    Next();   
}, 5000);


