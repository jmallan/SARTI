window.addEventListener('load', cargaEventos);

function cargaEventos(){
    document.getElementById("aEuros").addEventListener('click', aEuros);
    document.getElementById("aPeseta").addEventListener('click', aPesetas);    
}

function aEuros(){
    var cant = document.getElementById("peseta").value;
    if (!isNaN(cant) && cant != 0 && cant != "" && cant % 1 == 0){
        var cantE = cantP / 166.386;
        cantE = cantE.toFixed(2);
        document.getElementById("euro").value = cantE;
        document.getElementById("peseta").style.backgroundColor='white';
    }
    else {
        document.getElementById("peseta").style.backgroundColor='red';
    }
}

function aPesetas(){
    var cant = document.getElementById("euro").value;
    if (!isNaN(cant) && cant!= 0 && cant != ""){
        var cantP = cant * 166.386;
        cantP = cantP.toFixed(0);
        document.getElementById("peseta").value = cantP;
        document.getElementById("euro").style.backgroundColor='white';
    }
    else {
        document.getElementById("euro").style.backgroundColor='red';
    }
}