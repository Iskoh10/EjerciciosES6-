/*
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
*/

function findArrayIndex(array, text) {
  if (array.indexOf(text) !== -1) {
    console.log(`La palabra ${text} tiene un indice: ${array.indexOf(text)}`);
  } else {
    console.log('Text not found!');
  }
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

findArrayIndex(mainCharacters, 'Leia');
findArrayIndex(mainCharacters, 'Rey');
findArrayIndex(mainCharacters, 'Anakin');
