window.addEventListener('load', cargaEventos);

function cargaEventos(){
    var link = document.getElementsByTagName("a");
    for (i=0; i<link.length; i++){
        link[i].addEventListener("click", modifica);
        link[i].className="visible";
    }
}

function modifica(){
    var ver = this.className;   //capto la class de l'enllaç
    if (ver == "visible"){      //comprovo si es visible o no i actuo acord a ell
    //fer amb previousSibling per identificar el germà anterior.
    this.previousSibling.previousSibling.style.display="none";
    this.className="oculto";
    }
    else {
    this.previousSibling.previousSibling.style.display="block";
    this.className="visible";
    }
}
