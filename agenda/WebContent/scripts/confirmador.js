/**
 * Confirmação de exclusão de um contato
 * @author Professor José de Assim
 * Modificado por Osmar Siqueira
 */

function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão desse contato?")
	if (resposta === true){
		window.location.href = "delete?idcon=" + idcon
	}
}