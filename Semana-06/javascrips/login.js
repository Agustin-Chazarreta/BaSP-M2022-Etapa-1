let inputEmail = document.getElementById('input-email');
let inputPass = document.getElementById('input-pass');
function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else return false;
}
function checkEmail(e) {
  let message = document.getElementById('output-email');
  var result = validateEmail(e);
  if (result) {
    document.getElementById('output-email').innerHTML = 'Valid Email';
    message.style.display = 'flex';
    message.style.backgroundColor = '#aace9b';
  } else {
    document.getElementById('output-email').innerHTML = 'Not a valid Email';
    message.style.display = 'flex';
    message.style.backgroundColor = '#cc5050';
  }
}
function eliminateMsgEmail() {
  let errorMsg = document.getElementById('output-email');
  errorMsg.style.display = 'none';
}
function validatePass(e) {
  let message = document.getElementById('output-pass');
  let password = e.target.value;
  let newArr = [];
  let arr = password.split('');
  arr.map((e) => {
    if (isNaN(parseInt(e))) {
      newArr.push(e);
      return newArr;
    } else {
      newArr.push(parseInt(e));
      return newArr;
    }
  });
  let isANumber = (element) => typeof element == 'number';
  let isAString = (element) => typeof element == 'string';
  if (newArr.some(isANumber) && newArr.some(isAString)) {
    document.getElementById('output-pass').innerHTML = 'Valid Pass';
    message.style.display = 'flex';
    message.style.backgroundColor = '#aace9b';
  } else {
    document.getElementById('output-pass').innerHTML = 'Invalid password';
    message.style.display = 'flex';
    message.style.backgroundColor = '#cc5050';
  }
  return newArr;
}
function eliminateMsgPass() {
  let errorMsg = document.getElementById('output-pass');
  errorMsg.style.display = 'none';
}

inputEmail.addEventListener('blur', checkEmail);
inputPass.addEventListener('blur', validatePass);
inputEmail.addEventListener('focus', eliminateMsgEmail);
inputPass.addEventListener('focus', eliminateMsgPass);
