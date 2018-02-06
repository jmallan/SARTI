var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numDNI = prompt("Introduce tu numero de DNI");
var letraDNI = prompt("Introduce la letra de tu DNI").toUpperCase();
var indexLetra= numDNI % 23;

switch (numDNI > 0 && numDNI < 99999999) {
    case (true):
        var letra = letras[indexLetra];
        /* versio dos de l'exercici 6
        alert("Tu DNI es:" + numDNI + letra);*/
        if (letra == letraDNI){
            alert ("El número y la letra de DNI son correctos.");
        }
        else {
            alert ("La lletra introduida no es correcta");
        }
        break;
    case (false):
        alert ("El numero introduit no es correcte");
        break;
}
