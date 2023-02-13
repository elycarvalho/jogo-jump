const personagem = document.querySelector('.personagem')
const obstaculos = document.querySelector('.obstaculos')
const obstaculos2 = document.querySelector('.obstaculos2')
const obstaculos3 = document.querySelector('.obstaculos3')
const displayScore = document.querySelector('.score')
let pulou = false

document.addEventListener("keydown", (e) => {
	if(e.key === ' '  || 'ArrowUp') {
    personagem.classList.add('pulo')
    pulou = true
    console.log('pulou')
	}

	if(e.key === 'Enter') {
    console.log('parou')
    clearInterval(intervaloObstaculos)
	}
})

document.addEventListener("keyup", (e) => {
	if(e.key === 'ArrowUp') {
    personagem.classList.remove('pulo')
    pulou = false
    console.log(e.key)
	}
})

let intervaloObstaculos = setInterval(moveObstaculos, 35)
let posicaoObstaculos = 95
let posicaoObstaculos2 = 105
let score = 0

function moveObstaculos() {
  obstaculos.style.left = `${posicaoObstaculos}%`
  obstaculos2.style.left = `${posicaoObstaculos2 + 40}%`
  posicaoObstaculos--
  posicaoObstaculos2--
  
  score++
	displayScore.innerHTML = score
  if(posicaoObstaculos < -70) {
  	posicaoObstaculos = 95
  }

  if(posicaoObstaculos2 < -70) {
  	posicaoObstaculos2 = 95
  }

  if(posicaoObstaculos === 6 && pulou === false || 
  	posicaoObstaculos === -20 && pulou === false ||
  	posicaoObstaculos === -44 && pulou === false ||
  	posicaoObstaculos === -70 && pulou === false) {
  	alert('GAME OVER ' +  'score: ' + score)
  }
  console.log(posicaoObstaculos + 'pos2 ' + posicaoObstaculos2)
}

function perdeu() {
  posicaoObstaculos = 95
  posicaoObstaculos2 = 105
}



