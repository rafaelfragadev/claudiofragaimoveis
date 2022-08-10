import AnimaNumeros from './modules/anima-numeros.js';

import ScrollAnima from './modules/scroll-anima.js';

import ScrollSuave from './modules/scroll-suave.js';

import initmenuMobile from './modules/menu-mobile.js';

import initFiltro from './modules/filtro.js';

import initimagensPropriedades from './modules/imagens-propriedades.js';

import initpropriedadesConteudo from './modules/propriedades-conteudo.js';

initpropriedadesConteudo();

initimagensPropriedades();

initFiltro();

initmenuMobile();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');

scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');

scrollAnima.init();

const animaNumeros = new AnimaNumeros('[data-numero]', '.sobre-intro', 'ativo');

animaNumeros.init();
