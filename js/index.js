import { SUCURSAL } from "./sucursal.js";
const Button1 = document.getElementById("sucursal1");
const Button2 = document.getElementById("sucursal2");
const Button3 = document.getElementById("sucursal3");
const contenedor = document.getElementById("sucursalInformacion");
const ButtonParent = document.getElementById("sucursalBotones");
// const linkMobile = document.getElementsById("item-mobile");
// const menuCollapse = document.getElementsByClassName("navbar-toggler");
const ButtonChildren = ButtonParent.children;
console.log(SUCURSAL);

registrarEventListeners();

function registrarEventListeners() {
  Button1.addEventListener("click", () => addInfo(1));
  Button2.addEventListener("click", () => addInfo(2));
  Button3.addEventListener("click", () => addInfo(3));
  // linkMobile.addEventListener("click", removeCollapse);
}
// function removeCollapse () {
//   console.log('changing menu')
//   menuCollapse.classList.add('collapsed');
//   menuCollapse.setAttribute('aria-expanded', 'false');
// }
function addInfo(id) {
  const sucursalSelected = SUCURSAL.find((sucursal) => sucursal.id === id);
  console.log(ButtonChildren);
  Button1.classList.remove("btnWhite");
  Button2.classList.remove("btnWhite");
  Button3.classList.remove("btnWhite");
  Button1.classList.add("sucursalBoton");
  Button2.classList.add("sucursalBoton");
  Button3.classList.add("sucursalBoton");

  printInfo(sucursalSelected);
  printButton(id);
}

function printInfo(sucursalSelected) {
  const {
    whatsapp1,
    whatsapp2,
    direction,
    email1,
    email2,
    telephone1,
    telephone2,
  } = sucursalSelected;
  const infoSucursal = document.createElement("div");
  infoSucursal.className = "test";
  cleaner();
  infoSucursal.innerHTML = `
  <div class="contactoSucursales">
  <div class='d-flex align-items-center contactoSucursal'>
    <i class="fa-solid fa-phone-volume"></i>
    <p>${telephone1} / ${telephone2}  </p>
  </div>
  <div class='d-flex align-items-center contactoSucursal'>
    <i class="fa-brands fa-whatsapp"></i>
    <p>${whatsapp1} / ${whatsapp2}  / 0294 4335325</p>
  </div>
  <div class='d-flex align-items-center contactoSucursal'>
    <i class="fa-solid fa-envelope"></i>
    <p>${email1}- ${email2}</p>

  </div>
</div>
<div class="ubicacionSucursal">
  <img class='logoUbicacion' src="./Assets/imagenes/logoUbicacion.png" alt="Icono ubicacion">
  <h4>¿CÓMO LLEGAR?</h4>
  <p class="p1">${direction}</p>
  <p class="p2">SAN CARLOS DE BARILOCHE</p>
  <p class="p3">RÍO NEGRO, ARGENTINA</p>
</div>
</div>`;
  contenedor.appendChild(infoSucursal);
}
function cleaner() {
  const contenedorChildren = document.querySelector(".test");
  if (contenedor.children.length > 0) {
    contenedorChildren.remove();
  }
}
function printButton(id) {
  switch (id) {
    case 1:
      if (Button1.classList.contains("sucursalBoton")) {
        Button1.classList.add("btnWhite");
        Button1.classList.remove("sucursalBoton");
      } else {
        Button1.classList.remove("btnWhite");
        Button1.classList.add("sucursalBoton");
      }
      break;
    case 2:
      if (Button2.classList.contains("sucursalBoton")) {
        Button2.classList.add("btnWhite");
        Button2.classList.remove("sucursalBoton");
      } else {
        Button2.classList.remove("btnWhite");
        Button2.classList.add("sucursalBoton");
      }
      break;
    case 3:
      if (Button3.classList.contains("sucursalBoton")) {
        Button3.classList.add("btnWhite");
        Button3.classList.remove("sucursalBoton");
      } else {
        Button3.classList.remove("btnWhite");
        Button3.classList.add("sucursalBoton");
      }
      break;
    default:
      break;
  }
}

// AOS
