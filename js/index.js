import {SUCURSAL} from './sucursal.js';

const Button1 = document.getElementById('Button1');
const Button2 = document.getElementById('Button2');
const Button3 = document.getElementById('Button3');
const Button4 = document.getElementById('Button4');

const Button1ID = parseInt(Button1.value);
console.log(Button1ID);

const newArray = Button1.addEventListener('click', () => {SUCURSAL.filter(sucursal => {sucursal.id === Button1ID})}
)

