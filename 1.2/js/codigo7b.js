var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var fi = false;

mes = prompt("Mes a buscar:");

while (!fi){
    for (element of meses){
        if (element==mes){
            alert("El mes "+element+" esta al llistat.");
            fi=true;
            break;
        }
    }
    if(!fi){
        mes=prompt("El mes indicat no esta al llistat, torna a introduir-lo:");
    }
}