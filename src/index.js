// const element     = document.createElement('h1');   // Tipo de elemento que se desea crear 
// element.innerText = 'Pruebita, si jala prro !';     // Valor que se seteara en un elemento
// const container   = document.getElementById('app'); // Lugar donde se desea agregar el elemento.

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// DECLARACION DE CONSTANTES
const name = 'ANGEL';
const profesion = 'SISTEMAS';

//DECLARACION DE FUNCIONES 
function sum(){
  return 2 + 5; 
}

// INLINE FUNCTION 
const suma = () => 3 + 3;

// FORMA TRADICIONAL DE DECLARAR ELEMENTOS 
const element1 = <h1>HOLA REACT</h1>; 

// REACT: DECLARACION DE ELEMENTOS  
// CONTENT DE React.createElement(__ELEMENT(ETIQUETA HTML) ,__ATRIBUTO(PROPERTY), __CONTENIDO ETIQUETA)
const element2 = React.createElement('h1', {}, 'HOLA REACT');
const element3 = React.createElement(
  'a', // ELEMENT(ETIQUETA HTML)
  { 
    href: 'https://github.com/angelhr28' // ATRIBUTO(PROPERTY)  
  },
  'HOLA REACT' // CONTENIDO ETIQUETA
  );
const element4 = React.createElement(
  'h1',
  {},
  'HOLA, SOY ' + name
);

// JSX: EL VALOR DENTRO DE LLAVES SERA EL VALOR O EXPRESION A EVALUAR.
const element5 = <h1>HOLA REACT SOY {name}</h1>; 
const element6 = <h1>HOLA REACT SOY {2+2}</h1>; 
const element7 = <h1>HOLA REACT SOY {sum()}</h1>; 
const element8 = <h1>HOLA REACT SOY {suma()}</h1>; 
const element9 = (
  <div>
    <h1>HOLA, SOY {name}</h1>
    <p>SOY ING. DE {profesion}</p>
  </div>
)
//NOTA REPLICAR EL MISMO COMPONENTE PERO CON REACT CREATECOMPONENT
const element10 = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'HOLA, SOY' + name),
  React.createElement('P', {}, 'SOY ING. DE '+ profesion)
  );

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element10, container);
