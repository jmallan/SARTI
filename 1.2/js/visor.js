window.addEventListener('load', cargaEventos);

function cargaEventos(){
    var images = document.getElementById("scroll").children;
    console.log(images[0]);
    var inicial = document.querySelector("div#visor img");
    inicial.src = images[0].src;
    var text = document.createElement("h2");
    var node = document.createTextNode(images[0].alt);
    console.log(node);
    console.log(text);
    text.appendChild(node);
    document.getElementById("visor").appendChild(text);
    for (elements of images){
        elements.addEventListener('click', canvia);
    }
}

function canvia(){
    document.images.visor.src = this.src;
    document.images.visor.alt = this.alt;
    document.getElementsByTagName("h2")[0].innerHTML = this.alt;
}