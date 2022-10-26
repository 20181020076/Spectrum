let botonMenu = document.getElementById("boton__menu");
botonMenu.addEventListener("click",changeStyle);
function changeStyle(){
    let element = document.getElementById("menu")
    let comp = element.currentStyle || getComputedStyle(element, null);
        if (comp.height == "0px"){
        element.setAttribute('style', 'height: 100px')
    }else{
        element.setAttribute('style', 'height: 0px')
    }
};