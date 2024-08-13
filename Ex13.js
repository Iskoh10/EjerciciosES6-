/*
Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.
*/
function findArrayIndex(array, text) {
  if (array.indexOf(text) !== -1) {
    console.log(`La palabra ${text} tiene un indice: ${array.indexOf(text)}`);
    console.log('Y va a ser eliminado');
  } else {
    console.log('Text not found!');
  }
  removeItem(array, array.indexOf(text));
}

const removeItem = (array, text) => {
  array.splice(text, 1);
  console.log(array);
};

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

findArrayIndex(mainCharacters, 'Rey');
findArrayIndex(mainCharacters, 'Chewbacca');
