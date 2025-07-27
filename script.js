// Código que gera letras aleatórias para o minigame

const todosCaracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let ordem = []

for (let maxLetras = 0; maxLetras <= 5; maxLetras++) {
    let letraAleatoria = Math.floor(Math.random() * todosCaracteres.length);
    ordem.push(todosCaracteres[letraAleatoria])
}


// código que renderiza as letras na tela
ordem.forEach((element, index) => {
    let letra = document.createElement('div')
    letra.classList.add(`container-letra`)
    letra.classList.add(`letra-${index}`)
    letra.innerHTML = element
    document.querySelector('.container-game').appendChild(letra)
})


function trocaClasseAcerto(index) {
    let letra = document.querySelector(`.letra-${index}`)
    letra.classList.add('container-letra-acerto')
}
function trocaClasseErro(index) {
    let letra = document.querySelector(`.letra-${index}`)
    letra.classList.add('container-letra-erro')
}

let start = 0
let contador = 0
let errou = false
let pontuacao = 0

// lê as teclas pressionadas e transforma em maiúscula
addEventListener('keyup', function (e) {
    let tecla = e.key.toUpperCase()
    // // vou verificar se a tecla pressionada é igual a primeira letra do array
    // tecla === ordem[0] ? trocaClasseAcerto(1) : trocaClasseErro(1)
    verificaTecla(tecla)
    ponto()
})
// a primeira sendo ok, dá pra ir pra segunda, terceira e afins

function verificaTecla(tecla) {
    if (tecla === ordem[contador]) {
        trocaClasseAcerto(contador)
        contador++
        ponto()
    } else {
        trocaClasseErro(contador)
        errou = true
    }
}

// Ponto será dado ao terminar a sequência de letras, ou seja, quando o contador chegar a 6
function ponto() {
    if (contador === 6) {
        pontuacao++
        contador = 0
        console.log(pontuacao)
    }
}