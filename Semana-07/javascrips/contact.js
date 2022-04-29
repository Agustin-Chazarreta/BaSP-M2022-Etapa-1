//Variables and DOM
let inputName = document.getElementById('input-name');
let inputEmail = document.getElementById('input-email');
let btnSend = document.getElementById('btn-send');
let textArea = document.getElementById('text-area-msg');
let stringLetters = 'abcdefghijklmnopqrstuvwxyz';
let stringNumbers = '0123456789';
let stringNumbersAndLetters = stringLetters + stringNumbers;
let stringNumAndLetAndSpace = stringLetters + stringNumbers + ' ';
let values = [
  {
    boolean: false,
    errorType: 'Error: Invalid Email \n',
  },
  {
    boolean: false,
    errorType: 'Error: Name must have at least 8 characters, only letters \n',
  },
  {
    boolean: false,
    errorType: 'Error: Text area must contain more than 3 character \n',
  },
];
//Reusable functions
function includesLetters(arr) {
  return arr.some((c) => stringLetters.includes(c));
}
function onlyLetter(arr) {
  return arr.every((c) => stringLetters.includes(c));
}
function onlyLetNumSpace(arr) {
  return arr.every((c) => stringNumAndLetAndSpace.includes(c));
}
function includesNumberAndLetter(arr) {
  return arr.some((c) => stringNumbersAndLetters.includes(c));
}
//Validations
//Email validation.
function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else return false;
}

function checkEmail(e) {
  let message = document.getElementById('output-email');
  var result = validateEmail(e);
  if (result) {
    message.innerHTML = 'Valid Email';
    message.style.visibility = 'visible';
    message.style.backgroundColor = '#aace9b';
    values[0].boolean = true;
  } else {
    message.innerHTML = 'Not a valid Email';
    message.style.visibility = 'visible';
    message.style.backgroundColor = '#cc5050';
    values[0].boolean = false;
  }
}
function eliminateMsgEmail() {
  let errorMsg = document.getElementById('output-email');
  errorMsg.style.visibility = 'hidden';
}

//Nombre: Solo letras y debe tener más de 3 letras.
function validateName(e) {
  let message = document.getElementById('output-name');
  let name = e.target.value;
  let arrName = name.toLowerCase().split('');
  if (includesLetters(arrName) && onlyLetter(arrName) && name.length >= 3) {
    values[1].boolean = true;
    message.innerHTML = 'Valid Name';
    message.style.visibility = 'visible';
    message.style.backgroundColor = '#aace9b';
  } else {
    values[1].boolean = false;
    message.innerHTML = 'Not a valid Name';
    message.style.visibility = 'visible';
    message.style.backgroundColor = '#cc5050';
  }
}
function eliminateMsgName() {
  let errorMsg = document.getElementById('output-name');
  errorMsg.style.visibility = 'hidden';
}

//Text area: Alfanumerico tener más de 3 letras.
function validateTextArea(e) {
  let message = document.getElementById('output-text-area');
  let textAreaMsg = e.target.value;
  let arrTextAreaMsg = textAreaMsg.toLowerCase().split('');
  if (
    onlyLetNumSpace(arrTextAreaMsg) &&
    includesNumberAndLetter(arrTextAreaMsg) &&
    arrTextAreaMsg.length >= 3
  ) {
    values[2].boolean = true;
    message.innerHTML = 'Valid Name';
    message.style.visibility = 'visible';
    message.style.backgroundColor = '#aace9b';
  } else {
    values[2].boolean = false;
    message.innerHTML = 'Not a valid Name';
    message.style.visibility = 'visible';
    message.style.backgroundColor = '#cc5050';
  }
}
function eliminateMsgName() {
  let errorMsg = document.getElementById('output-text-area');
  errorMsg.style.visibility = 'hidden';
}
//Events
inputEmail.addEventListener('blur', checkEmail);
inputName.addEventListener('blur', validateName);
inputEmail.addEventListener('focus', eliminateMsgEmail);
inputName.addEventListener('focus', eliminateMsgName);
textArea.addEventListener('blur', validateTextArea);
textArea.addEventListener('focus', eliminateMsgName);

//Button event
btnSend.addEventListener('click', function alerta(e) {
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
  if (arr.length === 3) {
    alert(
      'Email : ' +
        inputEmail.value +
        '\n' +
        'Name : ' +
        inputName.value +
        '\n' +
        'Text value is : ' +
        textArea.value
    );
  } else alert(errArr);
});
