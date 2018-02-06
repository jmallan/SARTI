var num = prompt("Numero per calcul·lar el factorial:");
var factorial = 1;
var n = num;

for (n; n>0; n--){
    factorial *= n;
}

alert("El factorial de "+num+" és "+factorial);