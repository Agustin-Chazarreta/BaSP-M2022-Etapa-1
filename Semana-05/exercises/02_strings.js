// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
function toUpper(str) {
  return str.toUpperCase();
}
console.log(toUpper('hello hello hello'));
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
function subStringFirst5(str) {
  return str.substring(0, 5);
}
console.log(subStringFirst5('Transformation'));
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
function subStringLast3(str) {
  return str.substring(str.length - 3, str.length);
}
console.log(subStringLast3('Transformation'));

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
function firstUpperLetter(str) {
  let newWord =
    str.substring(0, 1).toUpperCase() +
    str.substring(1, str.length).toLowerCase();
  return newWord;
}
console.log(firstUpperLetter('transformation'));

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
function indexOfEmpty(str) {
  let indexEmpty = str.indexOf(' ');
  return indexEmpty;
}
console.log(indexOfEmpty('Hello Hello'));

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
function allTogether(str) {
  return (
    str.substring(0, 1).toUpperCase() +
    str.substring(1, str.indexOf(' ')).toLowerCase() +
    ' ' +
    str.substring(str.indexOf(' ') + 1, str.indexOf(' ') + 2).toUpperCase() +
    str.substring(str.indexOf(' ') + 2, str.length).toLowerCase()
  );
}
console.log(allTogether('hello hello'));
console.log(allTogether('construcciton construcciton'));
