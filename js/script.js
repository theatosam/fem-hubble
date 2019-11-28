let button = document.getElementById('submit');
button.onclick = errorHandler;

function errorHandler() {
  let firstName = document.getElementById('firstname').value;
  let lastName = document.getElementById('lastname').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (firstName == '') {
    let errorMessage = document.createElement('p');
    errorMessage.innerText = 'First name cannot be empty';
    document.getElementById('firstNameDiv').appendChild(errorMessage);
    return false;
  } else {
    return true;
  }
}
