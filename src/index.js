// const element     = document.createElement('h1');   // Tipo de elemento que se desea crear 
// element.innerText = 'Pruebita, si jala prro !';     // Valor que se seteara en un elemento
// const container   = document.getElementById('app'); // Lugar donde se desea agregar el elemento.

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>PROFE NO ME JALE PLOX </h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
