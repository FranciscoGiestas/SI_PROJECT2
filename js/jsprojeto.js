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

function maiorNumero() {
	var text = document.getElementById("valores").value;
	text = text.split(' ').join('');	// Retira os espaços
	var nrs = text.split(",");	// Separa pelas virgulas
	var biggest = 0;	// Variavel para o maior
	for(var i = 0; i < nrs.length; i++) {
		nrs[i] = parseInt(nrs[i]);	// Transforma num numero
		if(nrs[i] > biggest) {
			biggest = nrs[i];	// Se o numero corrente for maior que o "maior numero", substitui
		}
	}
	alert(biggest);
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