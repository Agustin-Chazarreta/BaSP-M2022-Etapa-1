//Variables and DOM
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
let btn = document.getElementById('btn');
let values = [
  (nameObj = {
    boolean: false,
    errorType: 'Error: Name must have at least 8 characters, only letters \n',
  }),
  (lastNameObj = {
    boolean: false,
    errorType:
      'Error: Last name must have at least 8 characters, only letters \n',
  }),
  (dniObj = {
    boolean: false,
    errorType:
      'Error: Dni must have only numbers and more than 7 characters \n',
  }),
  (telephoneObj = {
    boolean: false,
    errorType: 'Error: Telephone must have only numbers and 10 characters \n',
  }),
  (dateObj = {
    boolean: false,
    errorType: 'Error: You have to be more than 18 years  \n',
  }),
  (addressObj = {
    boolean: false,
    errorType:
      'Error: Address must contain letters, numbers and space in the middle \n',
  }),
  (localityObj = {
    boolean: false,
    errorType: 'Error: Locality must have more than 3 characters \n',
  }),
  (postalObj = {
    boolean: false,
    errorType:
      'Error: Postal only must have between 4 and 5 characters, only numbers \n',
  }),
  (emailObj = {
    boolean: false,
    errorType: 'Error: Invalid Email \n',
  }),
  (passwordObj = {
    boolean: false,
    errorType:
      'Error: Password must contain letters and numbers, at least 8 characters \n',
  }),
  (rPasswordObj = {
    boolean: false,
    errorType: 'Error: Not the same password \n',
  }),
];

//Reusable functions
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
  outputMsg.style.backgroundColor = '#aace9b';
}
function outputEditNotOk(id, msg) {
  let outputMsg = document.getElementById(id);
  outputMsg.innerHTML = msg;
  outputMsg.style.visibility = 'visible';
  outputMsg.style.display = 'flex';
  outputMsg.style.backgroundColor = '#cc5050';
}
function eliminateFocus(e) {
  let outputId = e.target.nextElementSibling.id;
  let message = document.getElementById(outputId);
  message.style.visibility = 'hidden';
}
//Validations
//save data on local storage
function saveDataLocal() {
  localStorage.setItem('name', inputName.value);
  localStorage.setItem('lastName', inputLastName.value);
  localStorage.setItem('dob', inputDate.value);
  localStorage.setItem('dni', inputDni.value);
  localStorage.setItem('phone', inputTelephone.value);
  localStorage.setItem('address', inputAddress.value);
  localStorage.setItem('city', inputLocalidad.value);
  localStorage.setItem('zip', inputPostal.value);
  localStorage.setItem('email', inputEmail.value);
  localStorage.setItem('password', inputPassword.value);
}
//Nombre: Solo letras y debe tener más de 3 letras.
function validateName(e) {
  let name = e.target.value;
  let arrName = name.toLowerCase().split('');
  if (includesLetters(arrName) && onlyLetter(arrName) && name.length >= 3) {
    values[0].boolean = true;
    outputEditOk('output-name', 'valid Name');
  } else {
    values[0].boolean = false;
    outputEditNotOk('output-name', 'invalid Name');
  }
}

//Apellido: Solo letras y debe tener más de 3 letras.
function validateLastName(e) {
  let lastName = e.target.value;
  let arrLastName = lastName.toLowerCase().split('');
  if (
    includesLetters(arrLastName) &&
    onlyLetter(arrLastName) &&
    lastName.length >= 3
  ) {
    values[1].boolean = true;
    outputEditOk('output-last-name', 'valid Last name');
  } else {
    values[1].boolean = false;
    outputEditNotOk('output-last-name', 'invalid Last name');
  }
}

//DNI: Solo número y debe tener más de 7 números.
function validateDni(e) {
  let dni = e.target.value;
  let arrDni = dni.toLowerCase().split('');
  if (
    onlyNumber(arrDni) &&
    includesNumber(arrDni) &&
    arrDni.length >= 7 &&
    arrDni.length <= 8
  ) {
    outputEditOk('output-dni', 'valid DNI');
    values[2].boolean = true;
  } else {
    values[2].boolean = false;
    outputEditNotOk('output-dni', 'invalid DNI');
  }
}

// Teléfono: Solo número y debe tener 10 números.
function validateTelephone(e) {
  let number = e.target.value;
  let arrNum = number.toLowerCase().split('');
  if (onlyNumber(arrNum) && includesNumber(arrNum) && arrNum.length == 10) {
    values[3].boolean = true;
    outputEditOk('output-telephone', 'valid Telephone');
  } else {
    values[3].boolean = false;
    outputEditNotOk('output-telephone', 'invalid Telephone');
  }
}

//Fecha de Nacimiento: Con formato dd/mm/aaaa.
newFormat = '';
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  return age;
}
function validateDate(e) {
  let age = e.target.value;
  var formatDate = age.split('-');
  if (getAge(age) >= 18 && getAge(age) <= 101) {
    newFormat =
      formatDate.slice(1, 2) +
      '/' +
      formatDate.slice(2) +
      '/' +
      formatDate.slice(0, 1);
    values[4].boolean = true;
    outputEditOk('output-date', 'valid Date');
  } else {
    values[4].boolean = false;
    outputEditNotOk('output-date', 'You have less than 18 years');
  }
}

// Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
function validateAddress(e) {
  let address = e.target.value;
  let arrAdd = address.toLowerCase().split('');
  if (
    onlyLetNumSpace(arrAdd) &&
    arrAdd.indexOf(' ') > 0 &&
    arrAdd.indexOf(' ') < arrAdd.length
  ) {
    values[5].boolean = true;
    outputEditOk('output-address', 'valid Address');
  } else {
    values[5].boolean = false;
    outputEditNotOk('output-address', 'invalid Address');
  }
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
    values[6].boolean = true;
    outputEditOk('output-localidad', 'valid Locality');
  } else {
    values[6].boolean = false;
    outputEditNotOk('output-localidad', 'invalid Locality');
  }
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
    values[7].boolean = true;
    outputEditOk('output-postal', 'valid Postal');
  } else {
    values[7].boolean = false;
    outputEditNotOk('output-postal', 'invalid Postal');
  }
}

// Email: Debe tener un formato de email válido.
function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else return false;
}
function checkEmail(e) {
  if (validateEmail(e)) {
    values[8].boolean = true;
    outputEditOk('output-email', 'valid Email');
  } else {
    values[8].boolean = false;
    outputEditNotOk('output-email', 'invalid Email');
  }
}

//Contraseña: Al menos 8 caracteres, formados por letras y números.
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
    values[9].boolean = true;
    pass.push(password);
    outputEditOk('output-password', 'valid Password');
  } else {
    values[9].boolean = false;
    outputEditNotOk('output-password', 'invalid Password');
  }
}

// Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
function corroboratePass(e) {
  let pass1 = pass.join('');
  let pass2 = e.target.value;
  if (pass1 === pass2 && pass1.length > 1) {
    values[10].boolean = true;
    pass = '';
    outputEditOk('output-password2', 'valid Password');
  } else {
    values[10].boolean = false;
    outputEditNotOk('output-password2', 'invalid Password');
  }
}

//Events
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

//Button event
btn.addEventListener('click', function checkAll(e) {
  e.preventDefault();
  let arr = [];
  let errArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i].boolean) {
      arr.push(values[i].boolean);
    } else {
      errArr.push(values[i].errorType);
    }
  }
  if (arr.length === 11) {
    //https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${birth.value}&phone=${tel.value}&address=${adress.value}&city=${city.value}&zip=${postalCode.value}&email=${email.value}&password=${password.value})
    fetch(
      `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${inputName.value}&lastName=${inputLastName.value}&dni=${inputDni.value}&dob=${newFormat}&phone=${inputTelephone.value}&address=${inputAddress.value}&city=${inputLocalidad.value}&zip=${inputPostal.value}&email=${inputEmail.value}&password=${inputPassword.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(
            'Name: ' +
              inputName.value +
              '\n' +
              'Last Name: ' +
              inputLastName.value +
              '\n' +
              'Dni : ' +
              inputDni.value +
              '\n' +
              'Date : ' +
              inputDate.value +
              '\n' +
              'Telephone: ' +
              inputTelephone.value +
              '\n' +
              'Address: ' +
              inputAddress.value +
              '\n' +
              'Locality : ' +
              inputLocalidad.value +
              '\n' +
              'Postal : ' +
              inputPostal.value +
              '\n' +
              'Email : ' +
              inputEmail.value +
              '\n' +
              'Password : ' +
              inputPassword.value +
              '\n' +
              'Repeated Password : ' +
              inputPassword2.value +
              '\n' +
              data.succes +
              data.msg
          );
          saveDataLocal();
        }
      })
      .catch((error) => {
        alert(error);
      });
  } else alert(errArr);
});

let asd = '2001-02-22';
function asd1(asd) {
  return asd.split('').reverse().join('');
}
console.log(asd1('2001-02-22'));
