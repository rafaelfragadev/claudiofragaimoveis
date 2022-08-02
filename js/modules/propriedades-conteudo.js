export default function initpropriedadesConteudo(){
  const conteudos = document.querySelectorAll('.propriedades-conteudo button');

  function ativarConteudo(event) {
    const conteudo = event.currentTarget;
    const controle = conteudo.getAttribute('aria-controls');
    const resposta = document.getElementById(controle);
  
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    conteudo.setAttribute('aria-expanded', ativa);
  }
  
  function eventosConteudos(conteudo){
    conteudo.addEventListener('click', ativarConteudo);
  }
  conteudos.forEach(eventosConteudos);
}


