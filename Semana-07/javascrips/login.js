//Variables and DOM
let inputEmail = document.getElementById('input-email');
let inputPass = document.getElementById('input-pass');
let btn = document.getElementById('login-btn');
let messageEmail = document.getElementById('output-email');
let messagePass = document.getElementById('output-pass');
let values = [
  {
    boolean: false,
    errorType: 'Error: Invalid Email \n',
  },
  {
    boolean: false,
    errorType:
      'Error: Password must contain letters and numbers, at least 8 characters \n',
  },
];

//Validations
function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else return false;
}

function checkEmail(e) {
  var result = validateEmail(e);
  if (result) {
    document.getElementById('output-email').innerHTML = 'Valid Email';
    messageEmail.style.visibility = 'visible';
    messageEmail.style.backgroundColor = '#aace9b';
    values[0].boolean = true;
  } else {
    document.getElementById('output-email').innerHTML = 'Not a valid Email';
    messageEmail.style.visibility = 'visible';
    messageEmail.style.backgroundColor = '#cc5050';
    values[0].boolean = false;
  }
}
function eliminateMsgEmail() {
  let errorMsg = document.getElementById('output-email');
  errorMsg.style.visibility = 'hidden';
}
function validatePass(e) {
  let password = e.target.value;

  let stringNumbers = '0123456789';
  let stringLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let stringLettersAndNumbers = stringNumbers + stringLetters;
  let arrPass = password.split('');
  let includesNumbers = arrPass.some((c) => stringNumbers.includes(c));
  let includesLetters = arrPass.some((c) => stringLetters.includes(c));
  let isValidChar = arrPass.every((c) => stringLettersAndNumbers.includes(c));
  if (includesNumbers && includesLetters && isValidChar) {
    document.getElementById('output-pass').innerHTML = 'Valid Pass';
    messagePass.style.visibility = 'visible';
    messagePass.style.backgroundColor = '#aace9b';
    values[1].boolean = true;
  } else {
    document.getElementById('output-pass').innerHTML = 'Invalid password';
    messagePass.style.visibility = 'visible';
    messagePass.style.backgroundColor = '#cc5050';
    values[1].boolean = false;
  }
}
function eliminateMsgPass() {
  let errorMsg = document.getElementById('output-pass');
  errorMsg.style.visibility = 'hidden';
}

inputEmail.addEventListener('blur', checkEmail);
inputPass.addEventListener('blur', validatePass);
inputEmail.addEventListener('focus', eliminateMsgEmail);
inputPass.addEventListener('focus', eliminateMsgPass);
btn.addEventListener('click', function logIn(e) {
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
  if (arr.length === 2) {
    fetch(
      `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${inputEmail.value}&password=${inputPass.value}`
    )
      .then((response) => response.json())
      .then((data) =>
        alert(
          'Email : ' +
            inputEmail.value +
            '\n' +
            'Password : ' +
            inputPass.value +
            '\n' +
            data.msg
        )
      )
      .catch((error) => {
        alert(error);
      });
  } else alert(errArr);
});
