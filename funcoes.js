/**
 *  @author MelissaLobo mellobomel@gmail.com
 */

//Mascara de Data: padrao dd/mm/yyyy
function mascaraData() {
	var n_char = document.getElementById("txtData").value.length;
	
	if(n_char == 2) {
		document.getElementById("txtData").value = document.getElementById("txtData").value + "/"; 
	} else if (n_char == 5) {
		document.getElementById("txtData").value = document.getElementById("txtData").value + "/"; 
	}
}

//Mascara de CEP: xxxxx-xxx
function mascaraCep() {
	var n_char = document.getElementById("txtCep").value.length;

	if(n_char == 5) {
		document.getElementById("txtCep").value = document.getElementById("txtCep").value + "-"
	}
}

//Mascara de Telefone: (xx)xxxx-xxxx
function mascaraTelefone() {
	var n_char = document.getElementById("txtFone").value.length;

	if(n_char == 2) {
		document.getElementById("txtFone").value = "(" + document.getElementById("txtFone").value + ")"
	} else if(n_char == 8) {
		document.getElementById("txtFone").value = document.getElementById("txtFone").value + "-"
	}
}