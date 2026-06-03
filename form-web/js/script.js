console.log("hello")

const nameInput = document.getElementById("nome-input");
const button = document.querySelector('.send-button')
const lista = document.querySelector('.lista');





button.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(nameInput.value)
})

