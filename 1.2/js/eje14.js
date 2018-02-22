$(document).ready(function(){
    for (i=0; i< $("a").length; i++){
        $("a").click(modifica);
    };
});

function modifica(){
    if ($(this).text() == "Ocultar contenidos"){
        $(this).prev().hide();
        $(this).text("Mostrar contenidos");
    }
    else {
        $(this).prev().show();
        $(this).text("Ocultar contenidos");
    }

}

/*
window.addEventListener('load', cargaEventos);

function cargaEventos(){
    var link = document.getElementsByTagName("a");
    for (i=0; i<link.length; i++){
        link[i].addEventListener("click", modifica);
        link[i].className="visible";
    }
}

function modifica(){
    var ver = this.className;   //capto la class de l'enllaç. //capto la class de l'enllaç. NO ES NECESSARI FER-HO amb CSS
    if (ver == "visible"){      //comprovo si es visible o no i actuo acord a ell
    //fer amb previousSibling per identificar el germà anterior.
    this.previousSibling.previousSibling.style.display="none"; // això es podria escriure al full css, al canviar la classe canviarà l'estil
    this.className="oculto";
    this.innerHTML = "Mostrar contenidos";
    }
    else {
        //plantejat com el cas anterior però a l'inversa.
    this.previousSibling.previousSibling.style.display="block";
    this.className="visible";
    this.innerHTML = "Ocultar contenidos";
    }
}
*/