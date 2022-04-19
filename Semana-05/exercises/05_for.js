console.log('--EXERCISE 5: FOR');

// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log('-Exercise 5.a:');
var array5A = ['arrow', 'right', 'left', 'up', 'down'];
for (var i = 0; i < array5A.length; i++) {
  alert('-Exercise 5.a: ' + array5A[i]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('-Exercise 5.b:');
var array5B = ['arrow', 'right', 'left', 'up', 'down'];
for (var i = 0; i < array5B.length; i++) {
  alert(
    '-Exercise 5.b: ' +
      array5B[i].substring(0, 1).toUpperCase() +
      array5B[i].substring(1, array5B[i].length).toLowerCase()
  );
}

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir
//  guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena comparada.
console.log('-Exercise 5.c:');
var array5C = ['arrow', 'right', 'left', 'up', 'down'];
var sentence = '';
for (var i = 0; i < array5C.length; i++) {
  sentence += array5C[i] + ' ';
}
alert('-Exercise 5.c: ' + sentence);

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del
// bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('-Exercise 5.d:');
var array5D = ['arrow', 'right', 'left', 'up', 'down'];
var newArray5D = [];
for (var i = 0; i < 10; i++) {
  newArray5D.push(i);
}
console.log('-Exercise 5.d: ' + newArray5D);
