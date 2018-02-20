window.addEventListener("load", cargaEventos);

function cargaEventos(){
    // var button = document.getElementsByTagName("button");
    var button = document.getElementById("botonera").children;
    //var colors = document.getElementById("colores").children;
    var colors = document.querySelectorAll("#colores div");
    //console.log(button);
    //console.log(colors);
    /*for (i=0; i<button.length; i++){
        button[i].addEventListener('click', canviTitol);
    }
    for (i in button){
        button[i].addEventListener('click', canviTitol);
        console.log(button[i]);
        
    }*/
    for (elements of button){
        elements.addEventListener('click', canviTitol);
    }
    for (elements of colors){
        elements.addEventListener('mouseover', canviColor);
    }
}

function canviTitol(){
    document.title = this.innerHTML;
    //document.title = this.childNodes[0].nodeValue;  //childNodes retorna un conjunt d'Elements, es per això que s'ha d'especificar quin element volem modificar.
}

function canviColor(){
    var color = getComputedStyle(this).getPropertyValue("background-color"); //getComputedStyle permet captar totes le propietats CSS d'un element. 
    //getPropertyValue permet captar la propietat CSS en concret.
    document.body.style.backgroundColor = getComputedStyle(this).color;

    //tambe es pot fer de la següent manera: documetn.body.style.backgroundColor = getComputedStyle.backgroundColor;
}