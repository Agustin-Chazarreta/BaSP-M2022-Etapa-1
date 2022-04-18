console.log('--EXERCISE 2: STRINGS');
// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');
let string2A = 'hello hello hello';
console.log(string2A.toUpperCase());
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b:');
let string2B = 'Transformation';
let subString = string2B.substring(0, 5);
console.log(subString);
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c:');
let string2C = 'Transformation';
let newString2C = string2C.substring(string2C.length - 3, string2C.length);
console.log(newString2C);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.d:');
let string2D = 'Transformation';
let newString2D =
  string2D.substring(0, 1).toUpperCase() +
  string2D.substring(1, string2D.length).toLowerCase();
console.log(newString2D);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e:');
let string2E = 'hello hello';
let newString2E = string2E.indexOf(' ');
console.log(newString2E);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f:');
let string2F = 'hello hello';
let newString2F =
  string2F.substring(0, 1).toUpperCase() +
  string2F.substring(1, string2F.indexOf(' ')).toLowerCase() +
  ' ' +
  string2F
    .substring(string2F.indexOf(' ') + 1, string2F.indexOf(' ') + 2)
    .toUpperCase() +
  string2F.substring(string2F.indexOf(' ') + 2, string2F.length).toLowerCase();
console.log(newString2F);
