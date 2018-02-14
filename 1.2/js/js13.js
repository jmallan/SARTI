window.addEventListener('load', cargaEventos);

function cargaEventos(){
	//document.getElementsByTagName("input")[0].addEventListener("click", anade);
	document.querySelector("input[value='Añadir elemento']").addEventListener("click", anade);
	document.querySelector("input[value='Eliminar elemento']").addEventListener("click", elimina);
}

function anade() {
	var elLi = document.createElement("li");
	var text = document.createTextNode("New");
	elLi.appendChild(text);
	document.getElementById("lista").appendChild(elLi);
	var numLi = document.getElementsByTagName("li").length-1;
	if(numLi >= 0){
		document.querySelector("input[value='Eliminar elemento']").style.display="initial";
	}
}

function elimina() {
	var numLi = document.getElementsByTagName("li").length-1;
	var removeLi = document.getElementsByTagName("li")[numLi];
	removeLi.parentNode.removeChild(removeLi);
	if(numLi <= 0){
		document.querySelector("input[value='Eliminar elemento']").style.display="none";
	}
}