window.addEventListener('load', cargaEventos);
//window.addEventListener('beforeunload', function(event) {event.returnValue = "Write something clever here..";});
var semaforo = true;



window.addEventListener("beforeunload", function (e) {

    var confirmationMessage = "\o/";     
    e.returnValue = confirmationMessage;           
    return confirmationMessage;       
  
  });

function cargaEventos(){
    var tags = document.getElementsByTagName("input");
    for (elements of tags){
        if (elements.id == "alta"){
            elements.addEventListener("click", enviar2);
        }
        else{
            elements.addEventListener("blur", avis);
            elements.addEventListener("change", canvi);

        }
    }
    
}
function canvi(){
        alert("el text ha canviat.");
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

function avis(){
    if (semaforo == true){
        alert("Has canviat de camp.");
        semaforo = false;
    }
    else {
        semaforo = true;
    }
    alert("has canviat el camp.");
    event.stopPropagation();
}

function close(){
    alert("Hasta luego");
}