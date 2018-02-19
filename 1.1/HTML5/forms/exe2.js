function limita(limit){
    var elemento = document.getElementById("coment");
    var num = document.getElementById("caracters");
    var caracters = limit - elemento.value.length;
    num.innerHTML = caracters;
    if(elemento.value.length >= limit ) {
        return false;
    }
    else {
        return true;
    }
}