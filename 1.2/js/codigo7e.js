var num = prompt("Introdueix un nombre des del que começar a comptar:");
var n = num;

for (n-1; n>=0; n--){
    if (n==0){
        alert("BOOoooooooom");
    }
    else {
        var ok = confirm(n);
        if (!ok){
        alert("Has cancel·lat el compte enrere.");
        break;
        }
    }
}

