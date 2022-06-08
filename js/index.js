
const Button2 = document.getElementById('sucursalBoton');

Button2.addEventListener("click", function changeButton() {
    if(Button2.classList.contains('btnWhite')){
        Button2.classList.remove('btnWhite');
    } else {console.log('Testingg');
    Button2.classList.add('btnWhite');}
});


