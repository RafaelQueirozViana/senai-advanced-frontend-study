console.log("hello")

const nameInput = document.getElementById("nome-input");
const sobrenomeInput = document.getElementById("sobrenome-input");
const button = document.querySelector('.send-button')
const lista = document.querySelector('.lista-nomes');






button.addEventListener('click', (event) => {
    event.preventDefault()
    lista.innerHTML += ` <li>${nameInput.value} ${sobrenomeInput.value}</li>`;
})

