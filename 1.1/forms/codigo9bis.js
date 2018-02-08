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