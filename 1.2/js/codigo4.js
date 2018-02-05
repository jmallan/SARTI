var valores = [true, 5, false, "hola", "adios", 2];
var suma = valores [1] + valores [5];
var resta = valores [1] - valores [5];
var multi = valores [1] * valores [5];
var divi = valores [1] / valores [5];
var resto = valores [1] % valores [5];

if (valores[3] > valores[4])
{
    alert (valores[3] + " es mayor que " + valores[4]);
}
else
{
    alert (valores[3] + " es menor que " + valores[4]);
}

alert ("suma = " + suma + ", resta = " + resta + ", multiplicación = " + multi + ", división = " + divi + ", resto de la división = " + resto);

alert (valores[0]&&valores[2]);
alert ("Si faig un OR, el resultt es " + valores[0]||valores[2]); //valor true, s'utilitza el OR //
