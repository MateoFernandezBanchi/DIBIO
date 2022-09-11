const contactButton = document.getElementById('contactButton');
const contactButtonBack = document.getElementById('contactButtonBack');
const contactForm = document.getElementById('contactForm');
contactButton.addEventListener('click', translateForm);
contactButtonBack.addEventListener('click', removeTranslateForm);

function onlyOne(checkbox) {
    const checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
    })
  }
function translateForm () {
    contactForm.classList.remove('contactForm');
    contactForm.classList.add('contactFormChanged');
}
function removeTranslateForm () {
    contactForm.classList.add('contactForm');
    contactForm.classList.remove('contactFormChanged');
}