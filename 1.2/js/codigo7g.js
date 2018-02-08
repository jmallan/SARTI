var text;
var arrayChars;
var noBckSpace;
var llarg;
var char;

do {
    text = prompt("Introdueix un text de mes de 5 caràcters, sense espais en blanc:");  // capto text
    arrayChars = text.split("");                                                          // separo caràcters
    noBckSpace = [];                                              // inicialitzo array on introduir els caracters que no son " "
    for (i=0; i<arrayChars.length; i++){                          // recorro array de caràcters i discrimino els que son " "
        char = arrayChars[i];
        if (char != " "){
            noBckSpace.push(char);
        }
    }
    llarg = noBckSpace.length;                                    // capturo llargada de l'array sense espais
} while (llarg<=5)

alert(noBckSpace);