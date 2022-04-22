console.log('alo');
let inputEmail = document.getElementById('input-email');
let inputPass = document.getElementById('input-pass');
console.log(inputEmail);
function validateEmail(e) {
  let atSign = e.target.value.indexOf('@');
  if (atSign < 1) return false;
  var dot = e.target.value.indexOf('.');
  if (dot <= atSign + 2) return false;
  if (dot === e.target.value.length - 1) return false;
  return true;
}
function checkEmail(e) {
  var result = validateEmail(e);
  if (result) {
    document.getElementById('output-email').innerHTML = 'Valid Email Id';
  } else {
    document.getElementById('output-email').innerHTML = 'NOT a Valid Email Id';
  }
  let errorMsg = document.getElementById('output-email');
  errorMsg.style.display = 'unset';
}
function eliminateMsgEmail() {
  let errorMsg = document.getElementById('output-email');
  errorMsg.style.display = 'none';
}
inputEmail.addEventListener('blur', checkEmail);
inputEmail.addEventListener('focus', eliminateMsgEmail);
