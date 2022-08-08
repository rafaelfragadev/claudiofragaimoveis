export default function initFiltro() {
  
  const tituloCategoria = document.querySelectorAll('.titulo-categoria');
  const todasCategorias = document.querySelectorAll('.tudo');
  
  function changeActivePosition(activeItem) {
    for(let i = 0; i < tituloCategoria.length; i += 1){
      tituloCategoria[i].classList.remove('active');
    }
    activeItem.classList.add('active');
  }

  function filterPosts(item) {
    changeActivePosition(item);
    for(let i = 0; i < todasCategorias.length; i += 1){
      if(todasCategorias[i].classList.contains(item.attributes.id.value)){
        todasCategorias[i].style.display = "block";
      } else {
        todasCategorias[i].style.display = "none";
      }
    }
  }

  for(let i = 0; i < tituloCategoria.length; i += 1) {
    tituloCategoria[i].addEventListener('click', filterPosts.bind(this, tituloCategoria[i]));
  }
}


