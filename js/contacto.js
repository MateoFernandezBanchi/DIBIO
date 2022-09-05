import {
    SUCURSAL
} from './sucursal.js';
console.log(SUCURSAL);

const selectForm = document.getElementById('selectSucursal');
const contactInfo = document.getElementById('contactInfo');

selectForm.addEventListener('change', getSelectValue);

function getSelectValue() {

    const selectedValue = document.getElementById('selectSucursal').value;
    const valueNumber = parseInt(selectedValue);
    console.log(valueNumber);
    printInfo(valueNumber);
}

function printInfo(valueNumber) {
    const sucursalSelected = SUCURSAL.find(sucursal => sucursal.id === valueNumber);
    const {
        whatsapp1,
        whatsapp2,
        direction,
        email1,
        email2,
        telephone1,
        telephone2,
        telephone3
    } = sucursalSelected
    const infoSucursal = document.createElement('div');
    infoSucursal.className = 'contactoInfo';
    cleaner();
    infoSucursal.innerHTML = `
<h4>PASO 2 - ELIJA MOTIVO DE CONSULTA</h4>

`;
    contactInfo.appendChild(infoSucursal);
}

function cleaner() {
    const contactInfoChildren = document.querySelector('.contactoInfo')
    if (contactInfo.children.length > 0) {
        contactInfoChildren.remove();

    }
}