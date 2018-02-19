window.addEventListener("load", cargaEventos);

function cargaEventos(){
    var button = document.getElementsByTagName("button");
    var colors = document.getElementById("colores").children;
    console.log(colors);
    for (elements of button){
        elements.addEventListener('click', canviTitol);
    }
    for (elements of colors){
        elements.addEventListener('mouseover', canviColor);
    }
}

function canviTitol(){
    document.title = this.childNodes[0].nodeValue;  //childNodes retorna un conjunt d'Elements, es per això que s'ha d'especificar quin element volem modificar.
}

function canviColor(){
    var color = getComputedStyle(this).getPropertyValue("background-color"); //getComputedStyle permet captar totes le propietats CSS d'un element. 
    //getPropertyValue permet captar la propietat CSS en concret.
    document.body.style.backgroundColor = color;
}