inicio();
function inicio(){
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R","S", "T", "U", "V", "X", "Y", "Z"];
var lower = [];
var minus;
var textIntroduit = prompt("Introduce un texto para saber si contiene mayusculas y/o minusculas.") 
var contiene = lowerUpper(textIntroduit);
alert(contiene);
}
// Creo array amb els caracters en minuscula//
for (elements of upper) {
    minus = elements.toLowerCase();
    lower.push(minus);
}

function lowerUpper(text){
    var majuscules = false;     //inicialitzo variable per saber si hi han majuscules.
    var minuscules = false;     //inicialitzo variable per saber si hi han minuscules.
    var textSeparat = text.split("");     //separo el text en caracters
    for (lletra of textSeparat) {   //recorro tots els element de l'array comparant si esta a upper o a minus
        var majus = upper.indexOf(lletra);
        var minus = lower.indexOf(lletra);
        if (minus >= 0){        
            minuscules = true;
        }
        else if (majus >= 0) {
            majuscules = true;
        }
    }
    switch (majuscules && minuscules){
        case (true && true):
            return "El texto contiene mayusculas y minusculas";
            break;
        case (true && false):
            return "El texto tan solo contiene mayusculas";
            break;
        case (false && true):
            return "El texto tan solo contiene minusculas";
            break;
        case (false && false):
            return "El texto no contiene ni mayusculas ni minusculas";
            break;
        default:
            break;
        }
    /*if (majuscules==true && minuscules==true) {
        return "El texto contiene mayusculas y minusculas";
    }
    else if (majuscules==true && minuscules==false) {
        return "El texto tan solo contiene mayusculas";
    }
    else if (majuscules==false && minuscules==true) {
        return "El texto tan solo contiene minusculas";
    }
    else {
        return "El texto no contiene ni mayusculas ni minusculas";
    }*/
}
