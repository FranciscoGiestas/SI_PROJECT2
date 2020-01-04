var firstColor = "slategrey";
var secondColor = "aquamarine";

function calcular() {
	var op1 = parseInt(document.getElementById("operando1").value);
	var op2 = parseInt(document.getElementById("operando2").value);
	alert("Resultado: " + (op1*op2));
}

function executarAlert() {
	var str = document.getElementById("textoNav").value;
	alert(str.toUpperCase());
}

function mudarCorFundo() {
	if(document.body.style.backgroundColor == secondColor) {
		document.body.style.backgroundColor = firstColor;
		return;
	}
	document.body.style.backgroundColor = secondColor;
}

// Esta funcao poderá não retornar o valor 100% correto da quantidade de palavras, mas é bem aproximado
function nrDePalavras(id) {
	var str = id.textContent;
	var count = 0;
	for(var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		if(c == " " || c == "\n") {	// Por cada vez que encontrar um espaço ou um fim de linha conta +1
			count++;
		}
	}
	count++; // Conta +1 devido ao fim do texto
	document.write("(" + count + " palavras)");	// Imprime a quantidade de palavras
}