var text=prompt("introdueix un text:");
var caracters = text.split("");
var llarg = caracters.length - 1;
var char;
var index = 0;
var stop = false;
var posicio;

while (!stop){
    char = caracters[index];
    posicio = index+1;
    alert("El "+posicio+" caràcter de "+text+" és: "+char);
    if (llarg == index || char == "$"){
        stop = true;
        break;
    }
    index++;
}
