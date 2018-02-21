window.addEventListener('load', cargaEventos);

function cargaEventos(){
    document.getElementById("tarea").addEventListener('keydown', function () { limita(10);});
}

function limita(maximoCaracteres) {
    var diferencia;
    var resposta=true;
    var elemento = document.getElementById("tarea");
    var character = event.charCode || event.keyCode;
    if (!(character == 8 || character == 46 || character == 37 || character == 39)){
        if(elemento.value.length >= maximoCaracteres){
            diferencia = 0;
            event.returnValue = false;
        }
        else {
            diferencia = maximoCaracteres - elemento.value.length-1;
            event.returnValue = true;
        }
    }
    else if (character == 8 || character == 46){
        if (elemento.value.length != 0){
            diferencia = maximoCaracteres - elemento.value.length+1;
            event.returnValue = true;
        }
        else {
            diferencia = maximoCaracteres;
            event.returnValue = true;
        }
    }
    else {
        diferencia = maximoCaracteres - elemento.value.length;
        event.returnValue = true;
    }
    document.getElementById("ayuda").innerHTML = diferencia + " / " +  maximoCaracteres;
}
