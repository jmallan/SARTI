inicio();

function inicio(){
    var numero = prompt("Introduce un número para saber si es par o impar: ");
    var par = par_impar(numero);
    alert(par);
}

function par_impar(num){
    /*if (num == 0) {
        return "El número 0 no es par ni impar.";
    }
    else {
        var resto = num % 2;    
        if (resto != 0) {
            return "El número "+numero+" es impar";
        }
        else {
            return "El número "+numero+" es par";
        }
    }*/
    var resto = num % 2;

    if( resto == 0) {
        return "El número: "+numero+" es par";
    }
    else {
        return "El número "+numero+" es impar";
    }
}