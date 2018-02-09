var num = prompt("Numero per calcul·lar el factorial:");

function factorial(rep) {
    if (rep > 1){
            rep *= factorial(--rep);
    }
    return rep;
}



function factorialJavi(numero){
    return numero>1?numero*factorialJavi(numero-1):1;
}



alert("El factorial de "+num+" és "+ factorial(num)+".");
alert("El factorial de "+num+" és "+ factorialJavi(num)+".");