//document.querySelector('body').style.backgroundColor = 'red';

const a11yButton = document.querySelector('#a11yButton');
const a11yModal = document.querySelector('.a11yModal');
const contactButton = document.querySelector('#contactButton');
const contactModal = document.querySelector('#contactModal');
const lightSwitch = document.querySelector('#lightSwitch');
contactButton.addEventListener('click', toggleHide);
contactModal.addEventListener('click', toggleHide);
a11yButton.addEventListener('click', toggleHide);
a11yModal.addEventListener('click', toggleHide);
lightSwitch.addEventListener('click', lighten);

function toggleHide(e) {
   const classes = Array.from(e.target.classList);
   console.log(classes);
   if(Array.from(e.target.classList).includes('contact')){
      contactButton.classList.toggle('hidden');
      contactModal.classList.toggle('hidden');    
   } else if (Array.from(e.target.classList).includes('a11y')) {
      a11yModal.classList.toggle('hidden');
      a11yButton.classList.toggle('hidden');
   }
} 

function lighten(e){
   e.stopPropagation();
   const everything = Array.from(document.querySelectorAll('*'));
   everything.forEach(elem => elem.classList.toggle('light'));
}




