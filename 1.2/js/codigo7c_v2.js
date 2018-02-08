var num = prompt("Numero per calcul·lar el factorial:");
var factor = 1;
var rep = num;

function factorial(rep) {
        if (rep != 0){
            factor *= rep--;
            factorial(rep);
        }
    return factor;
}

alert(factorial(rep));