function validateForm() {
  const trueval = true;
  //perform validation and if validation fails, set the value of returnval to false
  let phnum = document.forms["signformname"]["cont1"].value;
  if (phnum.length != 10) {
    alert("Enter valid phone number");
    trueval = false;
  }

  let password = document.forms["signformname"]["pwd"].value;
  if (password.length < 6) {
    alert("Entered Pasword is too small");
    trueval = false;
  }

  let cpassword = document.forms["signformname"]["cpwd"].value;
  if (password != cpassword) {
    alert("Password does not match");
    trueval = false;
  }
  return trueval;
}
