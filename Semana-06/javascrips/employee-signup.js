let stringLetters = 'abcdefghijklmnopqrstuvwxyz';
let stringNumbers = '0123456789';
let stringNumbersAndLetters = stringLetters + stringNumbers;
let stringNumAndLetAndSpace = stringLetters + stringNumbers + ' ';
let inputName = document.getElementById('input-name');
let inputLastName = document.getElementById('input-last-name');
let inputDni = document.getElementById('input-dni');
let inputDate = document.getElementById('input-date');
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
function onlyLetNumSpace(arr) {
  return arr.every((c) => stringNumAndLetAndSpace.includes(c));
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
function outputEditOk(id, msg) {
  let outputMsg = document.getElementById(id);
  outputMsg.innerHTML = msg;
  outputMsg.style.visibility = 'visible';
  outputMsg.style.display = 'flex';
  outputMsg.style.backgroundColor = 'green';
}
function outputEditNotOk(id, msg) {
  let outputMsg = document.getElementById(id);
  outputMsg.innerHTML = msg;
  outputMsg.style.visibility = 'visible';
  outputMsg.style.display = 'flex';
  outputMsg.style.backgroundColor = 'red';
}
function eliminateFocus(e) {
  let outputId = e.target.nextElementSibling.id;
  let message = document.getElementById(outputId);
  message.style.visibility = 'hidden';
}
//Validations

function validateName(e) {
  let name = e.target.value;
  let arrName = name.toLowerCase().split('');
  if (includesLetters(arrName) && onlyLetter(arrName) && name.length >= 3) {
    outputEditOk('output-name', 'valid Name');
  } else outputEditNotOk('output-name', 'invalid Name');
}
function validateLastName(e) {
  let lastName = e.target.value;
  let arrLastName = lastName.toLowerCase().split('');
  if (
    includesLetters(arrLastName) &&
    onlyLetter(arrLastName) &&
    lastName.length >= 3
  ) {
    outputEditOk('output-last-name', 'valid Last name');
  } else outputEditNotOk('output-last-name', 'invalid Last name');
}
function validateDni(e) {
  let dni = e.target.value;
  let arrDni = dni.toLowerCase().split('');
  if (onlyNumber(arrDni) && includesNumber(arrDni) && arrDni.length >= 7) {
    outputEditOk('output-dni', 'valid DNI');
  } else outputEditNotOk('output-dni', 'invalid DNI');
}

// Teléfono: Solo número y debe tener 10 números.
function validateTelephone(e) {
  let number = e.target.value;
  let arrNum = number.toLowerCase().split('');
  if (onlyNumber(arrNum) && includesNumber(arrNum) && arrNum.length == 10) {
    outputEditOk('output-telephone', 'valid Telephone');
  } else outputEditNotOk('output-telephone', 'invalid Telephone');
}
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  // var m = console.log(today.getMonth()) - console.log(birthDate.getMonth());
  // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //   age--;
  // }
  return age;
}

function validateDate(e) {
  let age = e.target.value;
  if (getAge(age) >= 18 && getAge(age) <= 101) {
    outputEditOk('output-date', 'valid Date');
  } else outputEditNotOk('output-date', 'You have less than 18 years');
}

// Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
function validateAddress(e) {
  let address = e.target.value;
  let arrAdd = address.toLowerCase().split('');
  console.log(arrAdd.indexOf(' '));
  if (
    onlyLetNumSpace(arrAdd) &&
    arrAdd.indexOf(' ') > 0 &&
    arrAdd.indexOf(' ') < arrAdd.length
  ) {
    outputEditOk('output-address', 'valid Address');
  } else outputEditNotOk('output-address', 'invalid Address');
}

// Localidad: Texto alfanumérico y debe tener más de 3 letras.
function validateLocality(e) {
  let locality = e.target.value;
  let arrLocality = locality.toLowerCase().split('');
  if (
    onlyLettersNumbers(arrLocality) &&
    includesNumberAndLetter(arrLocality) &&
    arrLocality.length > 3
  ) {
    outputEditOk('output-localidad', 'valid Locality');
  } else outputEditNotOk('output-localidad', 'invalid Locality');
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
    outputEditOk('output-postal', 'valid Postal');
  } else outputEditNotOk('output-postal', 'invalid Postal');
}

// Email: Debe tener un formato de email válido.
function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else return false;
}
function checkEmail(e) {
  if (validateEmail(e)) {
    outputEditOk('output-email', 'valid Email');
  } else outputEditNotOk('output-email', 'invalid Email');
}

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
    outputEditOk('output-password', 'valid Password');
  } else outputEditNotOk('output-password', 'invalid Password');
}

// Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
function corroboratePass(e) {
  let pass1 = pass.join('');
  let pass2 = e.target.value;
  if (pass1 === pass2 && pass1.length > 1) {
    outputEditOk('output-password2', 'valid Password');
  } else outputEditNotOk('output-password2', 'invalid Password');
}
inputName.addEventListener('blur', validateName);
inputName.addEventListener('focus', eliminateFocus);
inputLastName.addEventListener('blur', validateLastName);
inputLastName.addEventListener('focus', eliminateFocus);
inputDni.addEventListener('blur', validateDni);
inputDni.addEventListener('focus', eliminateFocus);
inputTelephone.addEventListener('blur', validateTelephone);
inputTelephone.addEventListener('focus', eliminateFocus);
inputDate.addEventListener('blur', validateDate);
inputDate.addEventListener('focus', eliminateFocus);
inputAddress.addEventListener('blur', validateAddress);
inputAddress.addEventListener('focus', eliminateFocus);
inputLocalidad.addEventListener('blur', validateLocality);
inputLocalidad.addEventListener('focus', eliminateFocus);
inputPostal.addEventListener('blur', validatePostal);
inputPostal.addEventListener('focus', eliminateFocus);
inputEmail.addEventListener('blur', checkEmail);
inputEmail.addEventListener('focus', eliminateFocus);
inputPassword.addEventListener('blur', validatePass);
inputPassword.addEventListener('focus', eliminateFocus);
inputPassword2.addEventListener('blur', corroboratePass);
inputPassword2.addEventListener('focus', eliminateFocus);
