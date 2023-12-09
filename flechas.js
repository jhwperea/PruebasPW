const nieto3= document.querySelector('.caja-nieto-3');
const nieto4= document.querySelector('.caja-nieto-4');

const nieto5= document.querySelector('.caja-nieto-5');
const nieto6= document.querySelector('.caja-nieto-6');

document.addEventListener('DOMContentLoaded',()=>{
  eventos();
});

function eventos() {
  
  nieto3.addEventListener('click', visible1);
  nieto4.addEventListener('click', visible2);
  nieto5.addEventListener('click', visible1);
  nieto6.addEventListener('click', visible2);
}

const visible1=()=>{
  nieto4.classList.remove('novisible');
  nieto6.classList.remove('novisible');
}

const visible2=()=>{
  nieto4.classList.add('novisible');
  nieto6.classList.add('novisible');
}