inicio();

function inicio(){
    var inicial = prompt("Introduce el texto que quieres comprobar que es palindromor, se lee de la misma forma desde la izaquierda y desde la derecha.");
    var palindromo = compruebaPalindromo(inicial);
    if (!palindromo){
        alert("El texto no es un palindromo.");
    }
    else {
        alert("El texto es un palindromo.");
    }
}    


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
    alert(inicialSin);
    var alReves = inicialSin.reverse();
          //creo el mirall del text sense espais
          inicialSin = inicialSin.reverse();
    alert(alReves);
    alert(""+inicialSin+" "+alReves);
    var resultado = true;
    var stop = false;
    for (i=0; i<inicialSin.length-1 || stop; i++);{      //recorro arrays comparant els caracters, en el moment en que un dels dos no coincideix trenco bucle i retorno false.
        alert(alReves[i]+inicialSin[i]);
        if (alReves[i] != inicialSin[i]){
            resultado = false;
            stop = true;
        }
    }
    return resultado;
}

function compruebaPalindromo2 (text){
    var stop = false;
    if (!stop){
    }
}