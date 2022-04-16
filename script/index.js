const a11yButton = document.querySelector('.a11yButton');
const a11yModal = document.querySelector('.a11yModal');
const fontButton = document.querySelector('.a11yFont');
const body = document.getElementsByTagName("body")[0];
const h1s = document.getElementsByTagName("h1");
const h2s = document.getElementsByTagName("h2");
const h3s = document.getElementsByTagName("h3");
const ring = document.querySelector("#ring");
const splash = document.querySelector("#splash");

console.log({body});
const closeSwitch = document.querySelector('#closeSwitch');
const hovers = Array.from(document.querySelectorAll('.hovers'));
const hoverSwitch = document.querySelector('#hoverSwitch');
const fontSwitch = document.querySelector('#fontSwitch');
const lightSwitch = document.querySelector('#lightSwitch');
const contrastSwitch = document.querySelector('#contrastSwitch');

console.log('it aint crashed yet!')
a11yButton.addEventListener('click', toggleHide);
a11yModal.addEventListener('click', toggleHide);
lightSwitch.addEventListener('click', toggleLight);
hoverSwitch.addEventListener('click', toggleHide);
hoverSwitch.addEventListener('click', toggleHovers);
fontSwitch.addEventListener('click', toggleFont);
lightSwitch.addEventListener('click', toggleLight);
contrastSwitch.addEventListener('click', toggleContrast);

function toggleHide(e) {
   a11yModal.classList.toggle('hidden');
   console.log(a11yModal.classList);
   a11yButton.classList.toggle('hidden');
   return 
} 

function toggleFont(e) {
   e.stopPropagation();
   const classes = Array.from(body.classList);
   console.log({classes})
   body.classList.toggle('a11yFont');
   const headings = [h1s,h2s,h3s].flatMap(h => { return Array.from(h)});
   headings.forEach(elem => elem.classList.toggle('a11yFont'));
   return
}

function toggleLight(e){
   e.stopPropagation();
   const everything = Array.from(document.querySelectorAll('*'));
   everything.forEach(elem => elem.classList.toggle('light'));
   return
}

function toggleHovers(e){
   e.stopPropagation();
   hovers.forEach(elem => elem.classList.toggle('hovers'));
   return
}

function toggleContrast(e) {
   const heading2s = Array.from(h2s);
   heading2s.forEach( h => h.classList.toggle('hiContrast'));
   splash.classList.toggle('hiContrast');
   ring.classList.toggle('hiContrast');
   return 
} 