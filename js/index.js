let examplePattern = new RegExp("[0-9]+"); //At least one number and anything latter
let PasswordPattern = new RegExp("(([0-9][A-z]+)+|([A-z][0-9]+)+)");


let FormInformation = {
  completeName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  country: "",
  gender: ""
};



function submitValidation(){
  FormInformation.completeName = document.getElementById("fullName").value;
  FormInformation.email = document.getElementById("emailInput").value;

  FormInformation.password = document.getElementById("passwordInput").value;
  FormInformation.passwordConfirm = document.getElementById("passwordConfirmInput").value;
  if(!PasswordPattern.test(FormInformation.password)){
    console.log("ERROR EN PATTERN DE PASSWORD");
  }
  if(!(FormInformation.password === FormInformation.passwordConfirm)){
    console.log("PASSWORDS NO MATCH");
  }

  FormInformation.country = document.getElementById("countrySelect").value;
  if(FormInformation.country == "default"){
    console.log("SELECCIONAR PAIS");
  }

  if(document.getElementById("radioFemenine").checked){
    FormInformation.gender = document.getElementById("radioFemenine").value;
  }
  else if(document.getElementById("radioMasculine").checked){
    FormInformation.gender = document.getElementById("radioMasculine").value;
  }

  console.log(FormInformation);
}

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event){
  event.preventDefault();
  submitValidation();
});

let cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("Form1").reset();
});
