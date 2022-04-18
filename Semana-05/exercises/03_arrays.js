console.log('--EXERCISE 3: ARRAYS');

// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a:');
let array = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
console.log(array[4], array[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b:');
console.log(array.sort());

// Agregar un elemento al principio y al final del array (utilizar unshift y push)
console.log('-Exercise 3.c:');
array.unshift('principio');
array.push('final');
console.log(array);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');
array.shift();
array.pop();
console.log(array);

// Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e:');
array.reverse();
console.log(array);

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f:');
console.log(array.join('-'));

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.g:');
let array3G = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const newArray3G = array3G.slice(4, 10);
console.log(newArray3G);
