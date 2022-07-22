export default function initimagensPropriedades() {
  const imagens = document.querySelectorAll('.imagens-propriedades img');
  const imagensContainer = document.querySelector('.imagens-propriedades')
  
  function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 900px)').matches;
    if(media){
      imagensContainer.prepend(img);
    }
  }
  function eventosImagens(img){
    img.addEventListener('click', trocarImagem);
  }
  
  imagens.forEach(eventosImagens);
}

