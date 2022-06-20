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
        id,
        title,
        description,
        subTitle,
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

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda itaque laudantium qui, beatae
  temporibus dignissimos eaque, ipsam ullam, nemo doloribus esse deserunt odit aut possimus labore ea iusto
  ut earum?</p>

<h4>DATOS DE CONTACTO</h4>
<div class='row'>
    <div class='col-6'>
        <i class="fa-brands fa-whatsapp"></i>
    </div>
    <div class='col-6>
    <p>
        <span>${whatsapp1} /</span>
        <span>${whatsapp2}</span>
        </p>
    </div>
    </div>
    <div class='col-6'>
      <div>
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div>
      <p>${direction}</p>
      </div>
    </div>
    <div class='col-6'>
      <div>
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div>
      <p>${email1}</p>
      <p>${email2}</p>
      </div>
    </div>
    <div class='col-6'>
      <div>
        <i class="fa-solid fa-phone-volume"></i>
      </div>
      <div>
      <p>${telephone1}</p>
      <p>${telephone2}</p>
      <p>${telephone3}</p>
      </div>
    </div>

</div>`;
    contactInfo.appendChild(infoSucursal);
}

function cleaner() {
    const contactInfoChildren = document.querySelector('.contactoInfo')
    if (contactInfo.children.length > 0) {
        contactInfoChildren.remove();

    }
}