// SIGN UP AUTH

let sign_up_name = document.getElementById("sign_up_name");
let sign_up_number = document.getElementById("sign_up_number");
let sign_up_email = document.getElementById("sign_up_email");
let sign_up_password = document.getElementById("sign_up_password");
let form = document.getElementById('form');

form.addEventListener('submit',(e) => {
   e.preventDefault();
})

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let signUpNameValue = sign_up_name.value;
  let signUpNumberValue = sign_up_number.value;
  let signUpEmailValue = sign_up_email.value;
  let signUpPasswordValue = sign_up_password.value;

  if(signUpNameValue == '' || signUpNumberValue == '' || signUpEmailValue == '' || signUpPasswordValue == ''){
   alert('Please enter details')
  }
  else if(signUpNumberValue.length != 10){
   alert('please enter valid phone number')
  }
  else if(signUpPasswordValue.length != 8){
   alert('password must be 8 characters')
  }
  else{
   allDataFill(signUpNameValue,signUpNumberValue,signUpEmailValue,signUpPasswordValue);
  }
});

function allDataFill(name,number,email,password){
   localStorage.setItem('name',name);
   localStorage.setItem('number',number);
   localStorage.setItem('email',email);
   localStorage.setItem('password',password);
   
   btn.textContent = 'Please wait...'
   setTimeout(() => {
      btn.textContent = 'Sign up'
      alert('sign up succesfully!! please login')
      allDone()
   }, 1700);
}

function allDone(){
   setTimeout(() => {
      window.location.href = 'login.html'
   }, 1000);
}


