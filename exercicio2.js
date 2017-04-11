// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let ant = document.getElementById('anterior')
let prox = document.getElementById('proximo')

ant.addEventListener('click', before)

function before(){
	document.getElementById('slide').src = servidorDasImagens.concat(todasasImagens--)
}
