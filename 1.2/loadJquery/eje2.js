$(document).ready(cargaeventos);

function cargaeventos(){
    var radio = $("input[type='radio']");
    for (element of radio){
        $(element).click(mostrar);
    }
}

function mostrar(){
    if ($(this).val() == "puigcerda"){
        $("#contenedor").load("puigcerda.html",function(response,status,xhr){
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#contenido" ).html( msg + xhr.status + " " + xhr.statusText );
              }
            $("#contenido").html=response;
        });
    }
    else if ($(this).val() == "andorra"){
        $("#contenedor").load("andorra.html",function(response,status,xhr){
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#contenido" ).html( msg + xhr.status + " " + xhr.statusText );
              }
            $("#contenido").html=response;
        });
    }
}