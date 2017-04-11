// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let buttons = document.getElementsByClassName('botao-expandir-retrair');

for (let button of buttons){
	button.addEventListener('click', buttonAction);
}

function buttonAction() {

	let paragrafo = this.parentNode;
	if(paragrafo.classList.contains('expandido')){
		paragrafo.classList.remove('expandido');
		this.innerHTML = '+';

	} else {
		paragrafo.classList.add('expandido');
		this.innerHTML = '-';

	}

}
