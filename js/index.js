import { SUCURSAL } from './sucursal.js';
const Button1 = document.getElementById('sucursal1');
const Button2 = document.getElementById('sucursal2');
const Button3 = document.getElementById('sucursal3');
const Button4 = document.getElementById('sucursal4');
const contenedor = document.getElementById('sucursalInformacion');
const ButtonParent = document.getElementById('sucursalBotones');
const ButtonChildren = ButtonParent.children;
console.log(SUCURSAL);


registrarEventListeners();

function registrarEventListeners() {
  Button1.addEventListener('click', ()=>addInfo(1));
  Button2.addEventListener('click', ()=>addInfo(2));
  Button3.addEventListener('click', ()=>addInfo(3));
  Button4.addEventListener('click', ()=>addInfo(4));
}
function addInfo(id) {
  const sucursalSelected = SUCURSAL.find(sucursal => sucursal.id === id);
  console.log(ButtonChildren)
  Button1.classList.remove('btnWhite');
  Button2.classList.remove('btnWhite');
  Button3.classList.remove('btnWhite');
  Button4.classList.remove('btnWhite');
  Button1.classList.add('sucursalBoton');
  Button2.classList.add('sucursalBoton');
  Button3.classList.add('sucursalBoton');
  Button4.classList.add('sucursalBoton');
  printInfo(sucursalSelected);
  printButton(id);
  
}

function printInfo(sucursalSelected) {
  // const title = sucursalSelected.title;
  const  {id, title, description, subTitle, whatsapp1, whatsapp2, direction, email1, email2, telephone1, telephone2, telephone3 } = sucursalSelected
    const infoSucursal = document.createElement('div');
    infoSucursal.className = 'test';
    cleaner();
    infoSucursal.innerHTML = `<h4>SUCURSAL ${title}</h4>
<p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda itaque laudantium qui, beatae
  temporibus dignissimos eaque, ipsam ullam, nemo doloribus esse deserunt odit aut possimus labore ea iusto
  ut earum?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vero reprehenderit laborum, ratione
  voluptate consequuntur voluptatibus praesentium eum optio corporis deserunt, qui eius sunt repellendus
  error minima ipsa aut illo?</p>
<h4>LOREM IPSUM DOLOR SIT</h4>
<div class='row'>
    <div class='col-6 d-flex'>
      <div>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
      <div>
        <p>${whatsapp1}</p>
        <p>${whatsapp2}</p>
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
    contenedor.appendChild(infoSucursal);
  }
  function cleaner() {
    const contenedorChildren = document.querySelector('.test')
    if (contenedor.children.length>0) {
      contenedorChildren.remove();

    }
  }
  function printButton(id) {
    switch (id) {
      case 1:
        if(Button1.classList.contains('sucursalBoton')) {
        Button1.classList.add('btnWhite');
         Button1.classList.remove('sucursalBoton');
      }
        else {
          Button1.classList.remove('btnWhite');
          Button1.classList.add('sucursalBoton');
        }
        break;
      case 2:
        if(Button2.classList.contains('sucursalBoton')) {
          Button2.classList.add('btnWhite');
           Button2.classList.remove('sucursalBoton');
        }
          else {
            Button2.classList.remove('btnWhite');
            Button2.classList.add('sucursalBoton');
          }
        break;
      case 3:
        if(Button3.classList.contains('sucursalBoton')) {
          Button3.classList.add('btnWhite');
           Button3.classList.remove('sucursalBoton');
        }
          else {
            Button3.classList.remove('btnWhite');
            Button3.classList.add('sucursalBoton');
          }
        break;
      case 4:
        if(Button4.classList.contains('sucursalBoton')) {
          Button4.classList.add('btnWhite');
          Button4.classList.remove('sucursalBoton');}
          else {
            Button4.classList.remove('btnWhite');
            Button4.classList.add('sucursalBoton');
          }
        break;
      default:
        break;
    }

  }