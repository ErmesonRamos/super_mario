const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');
const corpo = document.body;
const button = document.querySelector('.button-mobile')


function checkWidth() {
  if (corpo.clientWidth <= 900 ) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

checkWidth();

window.addEventListener('resize', checkWidth);

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioPositon);

  if(pipePosition <= 120 && pipePosition > 0 && marioPositon < 80) {
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${pipePosition}px`;

    mario.src = '../img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);