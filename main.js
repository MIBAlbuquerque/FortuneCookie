function funciona() {
  console.log("Funcionou");
}

// Constantes 

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnOpen = document.querySelector(".openbutton");
const btnNew = document.querySelector(".newbiscuit");

const arraySentences = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "Surpreender e ser surpreendido é o segredo do amor.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "O amor está sempre mais próximo do que você imagina.",
  "Realize o óbvio, pense no improvável e conquiste o impossível."
];

let number = Math.round(Math.random() * 8)

// Eventos

btnOpen.addEventListener('click', openBiscuit)
btnNew.addEventListener('click', newBiscuit)


// Funcoes

function openBiscuit() {

toggleScreen()
  screen2.querySelector("p").innerText = arraySentences[number]
}

function newBiscuit() {
  toggleScreen()
  number = Math.round(Math.random()*8)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide") 
}