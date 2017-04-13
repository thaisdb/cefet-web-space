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

let ant = document.getElementById('anterior');
let prox = document.getElementById('proximo');
let count = 0;
prox.addEventListener('click', slider);
ant.addEventListener('click', slider);

function slider(){
    if (this === prox){
        count++;
        if (count == todasAsImagens.length){
            count = 0;
        }
    }
    else {
        count--;
        if (count < 0){
            count = todasAsImagens.length - 1;
        }
    }
    document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[count]);
}
