const form = document.querySelector('form');
const inputSection = document.querySelector('input');
const alertText = document.querySelector('small');

let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
  if (inputSection.value.match(pattern)) {
    return;
  } else {
    e.preventDefault();
    alertText.classList.toggle('visible');
  }
});
