let stringLetters = 'abcdefghijklmnopqrstuvwxyz';
let stringNumbers = '0123456789';
let stringNumbersAndLetters = stringLetters + stringNumbers;
let inputName = document.getElementById('input-name');
let inputLastName = document.getElementById('input-last-name');
let inputDni = document.getElementById('input-dni');
let inputBirth = document.getElementById('input-birth');
let inputTelephone = document.getElementById('input-telephone');
let inputAddress = document.getElementById('input-address');
let inputLocalidad = document.getElementById('input-localidad');
let inputPostal = document.getElementById('input-postal');
let inputEmail = document.getElementById('input-email');
let inputPassword = document.getElementById('input-password');
let inputPassword2 = document.getElementById('input-password2');

function onlyLetter(arr) {
  return arr.every((c) => stringLetters.includes(c));
}
function onlyNumber(arr) {
  return arr.every((c) => stringNumbers.includes(c));
}
function onlyLettersNumbers(arr) {
  return arr.every((c) => stringNumbersAndLetters.includes(c));
}
function includesLetters(arr) {
  return arr.some((c) => stringLetters.includes(c));
}
function includesNumber(arr) {
  return arr.some((c) => stringNumbers.includes(c));
}
function includesNumberAndLetter(arr) {
  return arr.some((c) => stringNumbersAndLetters.includes(c));
}

//Validations

function validateNameAndLast(e) {
  let name = e.target.value;
  let arrName = name.toLowerCase().split('');
  if (includesLetters(arrName) && onlyLetter(arrName) && name.length >= 3) {
    console.log('its ok');
  } else console.log('not valid');
}

function validateDni(e) {
  let dni = e.target.value;
  let arrDni = dni.toLowerCase().split('');
  if (onlyNumber(arrDni) && includesNumber(arrDni) && arrDni.length >= 7) {
    console.log('ok');
  } else console.log('not ok');
}

// Teléfono: Solo número y debe tener 10 números.
function validateTelephone(e) {
  let number = e.target.value;
  let arrNum = number.toLowerCase().split('');
  if (onlyNumber(arrNum) && includesNumber(arrNum) && arrNum.length == 10) {
    console.log('ok');
  } else console.log('not ok');
}

// Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
let hola = 'adsad ';
console.log(hola.indexOf(' '));
// Localidad: Texto alfanumérico y debe tener más de 3 letras.
function validateLocality(e) {
  let locality = e.target.value;
  let arrLocality = locality.toLowerCase().split('');
  if (
    onlyLettersNumbers(arrLocality) &&
    includesNumberAndLetter(arrLocality) &&
    arrLocality.length > 3
  ) {
    console.log('its ok');
  } else console.log('it is not');
}

// Código Postal: Solo número y debe tener entre 4 y 5 números.
function validatePostal(e) {
  let postal = e.target.value;
  let arrPostal = postal.toLowerCase().split('');
  if (
    onlyNumber(arrPostal) &&
    includesNumber(arrPostal) &&
    arrPostal.length >= 4 &&
    arrPostal.length <= 5
  ) {
    console.log('ok');
  } else console.log('not ok');
}

// Email: Debe tener un formato de email válido.
function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else return false;
}
function checkEmail(e) {
  if (validateEmail(e)) {
    console.log('ok');
  } else console.log('not ok');
}

// Contraseña: Al menos 8 caracteres, formados por letras y números.
var pass = [];
function validatePass(e) {
  let password = e.target.value;
  let arrPass = password.toLowerCase().split('');
  if (
    includesLetters(arrPass) &&
    includesNumber(arrPass) &&
    onlyLettersNumbers(arrPass) &&
    arrPass.length >= 8
  ) {
    pass.push(password);
    console.log('itsOk');
  } else console.log('not ok');
  //   return password;
}

// Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
function corroboratePass(e) {
  let pass1 = pass.join('');
  let pass2 = e.target.value;
  if (pass1 === pass2 && pass1.length > 1) {
    console.log('its correct');
  } else console.log('doesnt match ');
}
inputName.addEventListener('blur', validateNameAndLast);
inputLastName.addEventListener('blur', validateNameAndLast);
inputDni.addEventListener('blur', validateDni);
inputTelephone.addEventListener('blur', validateTelephone);
inputLocalidad.addEventListener('blur', validateLocality);
inputPostal.addEventListener('blur', validatePostal);
inputEmail.addEventListener('blur', checkEmail);
inputPassword.addEventListener('blur', validatePass);
inputPassword2.addEventListener('blur', corroboratePass);
