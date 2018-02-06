var num;
var n;
var comptador = 0;
do{
    num = prompt("El nombre introduït és major que 100. Introdueix un nombre entre 0 i 100.");
} while (num>100)

n = num;
while (n<=100){
    n *=num;
    comptador++;
}

alert ("S'ha multiplicat el nombre "+num+" per ell mateix "+comptador+" vegades abans de superar 100.\nEl nombre final es: "+n);