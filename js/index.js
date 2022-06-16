import { SUCURSAL } from './sucursal.js';
const Button1 = document.getElementById('sucursal1');
const Button2 = document.getElementById('sucursal2');
const Button3 = document.getElementById('sucursal3');
const Button4 = document.getElementById('sucursal4');
const contenedor = document.getElementById('sucursalInformacion');
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
  console.log(sucursalSelected)
  printInfo(sucursalSelected);
}

function printInfo(sucursalSelected) {
  const title = sucursalSelected.title;
  // console.log(title);
  // const contenedorChildren = document.querySelector('.test')
  // if (contenedor.children.length>0) {
  //   console.log('remove');
  //   contenedorChildren.remove();

  // } else if (contenedor.children.length <= 0) {
    const infoSucursal = document.createElement('div');
    infoSucursal.className = 'test';
    const variableTest = document.querySelector('.test');
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
<div>
  <div>Whatsap</div>
  <div>Ubicacion</div>
  <div>Mail</div>
  <div>TELEFONO</div>
</div>`;
    contenedor.appendChild(infoSucursal);
  }
  function cleaner() {
    const contenedorChildren = document.querySelector('.test')
    if (contenedor.children.length>0) {
      contenedorChildren.remove();

    }
  }
