alert("HOLA");
const contenedor=document.querySelectorAll('.contenedor');
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  animacion();
}

function animacion() {
  contenedor.forEach((contenido)=>{
    contenido.setAttribute('dato-animacion',true);
    const scrollerInner = contenido.querySelector('.contenedor-caja');
    const scrollerCopy =Array.from(scrollerInner.children);
    scrollerCopy.forEach(item =>{
      const duplicado=item.cloneNode(true);
      console.log(duplicado);
      duplicado.setAttribute('duplicado', true);
      scrollerInner.appendChild(duplicado);

    });

  });
}
