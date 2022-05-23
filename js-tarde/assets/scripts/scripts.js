let tempo = document.getElementById('tempo')
let espaco = document.querySelector('#espaco')

// Manipulando o Tempo
function insereHTML(){
    tempo.innerHTML = "Conteúdo Inserido"
}

function tempoMsg(){
    setTimeout("insereHTML()", 3000)    // 1000 milissegundos = 1s
}

// Pegando a URL
function espacoMsg(){
    let location = window.location.href
    espaco.innerHTML = location
}

// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}