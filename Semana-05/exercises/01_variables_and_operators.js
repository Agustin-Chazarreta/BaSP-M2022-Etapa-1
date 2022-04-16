//1-A Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
function add(a, b) {
  return a + b;
}
console.log(add(5, 4));

//1-B Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
function concat(str1, str2) {
  return str1.concat(str2);
}
console.log(concat('Hello ', 'how are you?'));

//1-C Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
function strSumm(str1, str2) {
  let strLengthAdd = str1.length + str2.length;
  return strLengthAdd;
}
console.log(strSumm('Hello', 'Testing'));
