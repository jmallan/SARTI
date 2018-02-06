var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var dia;


/* FOR
for (i=0;i<semana.length;i++){
    dia=semana[i];
    alert(dia);
} */

/* FOR IN
for (index in semana){
    dia = semana[index];
    alert(dia);
} */

/* FOR OF
for (dia of semana){
    alert(dia);
} */

/* WHILE
var i=0;

while (i<semana.length){
    dia=semana[i];
    alert(dia);
    i++;
} */

//DO WHILE //

var i=0;

do {
    dia=semana[i];
    alert(dia);
    i++;
} while (i<semana.length)