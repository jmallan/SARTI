var inicial = prompt("Introduce el texto que quieres comprobar que es palindromor, se lee de la misma forma desde la izaquierda y desde la derecha.");
var palindromo = compruebaPalindromo(inicial);

function sinEspacios(text) {
    var arrayChars = text.split("");                                                        // separo caràcters
    var noBckSpace = [];                     // inicialitzo array on introduir els caracters que no son " "
    var char;     
    for (i=0; i<arrayChars.length; i++){                          // recorro array de caràcters i discrimino els que son " "//
        char = arrayChars[i];
        if (char != " "){
            noBckSpace.push(char);
        }
    }
    return noBckSpace;
}

function compruebaPalindromo(text2){
    var inicialSin=sinEspacios(text2);      //creo el array sin espacios
    var alReves = inicialSin.reverse();     //creo el mirall del text sense espais
    for (i=0; i>text2.length; i++);{        //recorro arrays comparant els caracters, en el moment en que un dels dos no coincideix trenco bucle i retorno false.
        if (alReves[i] != text2[i]){
            return false;
        }
    }
    return true;
}

if (!palindromo){
    alert("El texto no es un palindromo.")
}
else {
    alert("El texto es un palindromo.")
}

