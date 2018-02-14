window.addEventListener('load', cargaEventos);

function cargaEventos(){
	//document.getElementsByTagName("input")[0].addEventListener("click", anade);
	document.querySelector("input[value='Añadir elemento']").addEventListener("click", anade);
}

function anade() {
	var elLi = document.createElement("li");
	var text = document.createTextNode("New");
	elLi.appendChild(text);
	document.getElementById("lista").appendChild(elLi);
}