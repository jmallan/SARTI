window.addEventListener('load',cargaEventos);

function cargaEventos(){
    var img = document.getElementsByTagName("img"); 
    img[0].addEventListener("mouseover", show);
}

function enviar(){
    var ok = confirm("Estas segur de voler enviar el formulari");
    if (ok){
        document.alta.submit();
        alert("El formulario se ha enviado correctamente.");
        return true;
    }
    else {
        alert("No se ha enviado el formulario.");
        return false;
    }
}

//Javascript formularis.

function enviar2(){
    alert("S'ha enviat el formulari.");
}

function show(){
    alert("No copiar la imatge!!!!");
}