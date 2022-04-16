// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
function forArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    return alert(arr[i]);
  }
}
// forArray(['arrow', 'right', 'left', 'up', 'down']);

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
function capiArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    return alert(
      arr[i].substring(0, 1).toUpperCase() +
        arr[i].substring(1, arr[i].length).toLowerCase()
    );
  }
}
// capiArray(['arrow', 'right', 'left', 'up', 'down']);

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir
//  guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
function arrToString(arr) {
  let sentence = '';
  for (var i = 0; i < arr.length; i++) {
    sentence += arr[i] + ' ';
  }
  return alert(sentence);
}

// arrToString(['arrow', 'right', 'left', 'up', 'down']);

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del
// bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

function escalateArray(num) {
  let newArr = [];
  for (var i = 0; i < num; i++) {
    newArr.push(i);
  }
  return console.log(newArr);
}
escalateArray(10);
