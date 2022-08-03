import ScrollAnima from './modules/scroll-anima.js';
import ScrollSuave from './modules/scroll-suave.js';

import initmenuMobile from './modules/menu-mobile.js';
initmenuMobile();

import initFiltro from './modules/filtro.js';
initFiltro();

import initimagensPropriedades from './modules/imagens-propriedades.js';
initimagensPropriedades();

import initpropriedadesConteudo from './modules/propriedades-conteudo.js';
initpropriedadesConteudo();

import initAnimaNumeros from './modules/anima-numeros.js';
initAnimaNumeros();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();
