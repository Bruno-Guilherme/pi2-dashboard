import './sobre.js'
import './dependencias.js'
import { render } from './graphs.js';

const abrirSidebar = () => {
  const aside = document.querySelector("aside");

  console.log("Abriu")

  // Verifica se a barra lateral está atualmente visível ou oculta
  if (aside.style.display === 'none' || aside.style.display === '') {
    // Se estiver oculta, torna-a visível
    aside.style.display = "block";
    console.log("block");
  } else {
    // Se estiver visível, oculta-a
    aside.style.display = "none";
    console.log('none');
  }
};

render();
