$(document).ready(function(){
	$("input[value='Añadir elemento']").click(anade);
	$("input[value='Eliminar elemento']").click(elimina);
});

function anade(){
	var text = prompt("text que vols introduir: ");
	$("#lista").append("<li>"+text);
	var numLi = $("#lista li").length;
	if (numLi > 0){
		$("input[value='Eliminar elemento']").css("display", "inline");
	}
}

function elimina(){
	$($("li")[$("#lista li").length-1]).remove();
	if($("#lista li").length == 0){
		$("input[value='Eliminar elemento']").css("display", "none");
	}
}

/*

window.addEventListener('load', cargaEventos);

function cargaEventos(){
	//document.getElementsByTagName("input")[0].addEventListener("click", anade);
	document.querySelector("input[value='Añadir elemento']").addEventListener("click", anade);
	document.querySelector("input[value='Eliminar elemento']").addEventListener("click", elimina);
}

function anade() {
	var elLi = document.createElement("li");
	var text = document.createTextNode(prompt("Text que vols introduir: "));
	elLi.appendChild(text);
	document.getElementById("lista").appendChild(elLi);
	var numLi = document.getElementsByTagName("li").length;
	if(numLi > 0){
		document.querySelector("input[value='Eliminar elemento']").style.display="inline";
	}
}

function elimina() {
	var numLi = document.getElementsByTagName("li").length-1;
	var removeLi = document.getElementsByTagName("li")[numLi];
	removeLi.parentNode.removeChild(removeLi);
	if(numLi == 0){
		document.querySelector("input[value='Eliminar elemento']").style.display="none";
	}
}*/