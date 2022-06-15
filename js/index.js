
const Button2 = document.querySelector('.sucursalBoton');
const sucursalBotones = document.querySelector('#sucursalBotones');

console.log(Button2);


registrarEventListeners();

function registrarEventListeners() {
    // Button2.addEventListener("click", changeButton);
    sucursalBotones.addEventListener('click', changeButton);
}

function changeButton(e) {
    console.log(e.target.classList)
    if (e.target.classList.contains('sucursalBoton')) {
        console.log('Testingg');
        e.target.classList.add('btnWhite');
    } else if (e.target.classList.contains('btnWhite')) {
        e.target.classList.remove('btnWhite');
    }
}

function test(e) {
    console.log(e.target.classList);
}