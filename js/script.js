function validateForm() {
  let firstName = document.forms.signUp.firstname.value;
  if (firstName == '') {
    alert('First Name cannot be empty');
    return false;
  }
}
