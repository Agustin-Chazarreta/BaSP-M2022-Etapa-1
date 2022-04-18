console.log('--EXERCISE 6: FUNCTIONS');
// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable,
//  mostrando el valor de dicha variable en la consola del navegador.
console.log('-Exercise 6.a:');

function add(a, b) {
  return console.log('-Exercise 6.a: ' + (a + b));
}
add(5, 4);

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error
//  y retornar el valor NaN como resultado.
console.log('-Exercise 6.b:');

function verifyAdd(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return console.log('-Exercise 6.b: ' + (a + b));
  } else {
    alert('-Exercise 6.b: An error has ocurred');
    return NaN;
  }
}
verifyAdd(5, 4);
verifyAdd('2', 4);

// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c:');

function isInt(num) {
  if (Number.isInteger(num)) {
    return console.log('-Exercise 6.c: ' + true);
  } else return console.log('-Exercise 6.c: is not an integer');
}
isInt(5);

// A la función suma del ejercicio 6b agregarle una llamada que valide que los números sean enteros.
//  En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log('-Exercise 6.d:');

function verifyAddAndInt(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return console.log('-Exercise 6.d: ' + (a + b));
    } else
      return alert(
        '-Error 6.d: rounded and added, Result =' +
          (Math.round(a) + Math.round(b))
      );
  } else {
    alert('-Exercise 6.d: An error has ocurred');
    return NaN;
  }
}
verifyAddAndInt(6, 4.3);

// Convertir la validación del ejercicio 6d en una función separada
// y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('-Exercise 6.e:');

function add2(a, b) {
  return verifyAddAndInt(a, b);
}
add2(3, 4);
add2(3.3, 4.7);
