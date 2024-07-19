const form = document.querySelector("#form"); 
const nameInput = document.querySelector("#name"); 
const passwordInput = document.querySelector("#password"); 
const emailInput = document.querySelector("#email"); 

nameInput.addEventListener("change", checkName);
passwordInput.addEventListener("change", checkPassword);
emailInput.addEventListener("change", checkEmail);

// Name Function
function checkName() {
  const nameValue = nameInput.value.trim();

  if (nameValue === "") {
    setError(nameInput, "نام کاربری وارد نمایید.");
  } else if (!/^[a-zA-Z\s]+$/.test(nameValue) || nameValue.length > 15) {
    setError(nameInput, "نام باید کمتر از 15 کاراکتر و فقط شامل حروف انگلیسی باشد.");
  } else {
    setSuccess(nameInput);
  }
}

// Password Function
function checkPassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
    setError(passwordInput, "گذرواژه وارد نمایید.");
  } else if (!isValidPassword(passwordValue)) {
    setError(passwordInput, "گذرواژه باید حداقل 8 کاراکتر و شامل حروف بزرگ و کوچک و اعداد باشد.");
  } else {
    setSuccess(passwordInput);
  }
}

// Email Function
function checkEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    setError(emailInput, "ایمیل وارد نمایید.");
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "ایمیل معتبر وارد نمایید.");
  } else {
    setSuccess(emailInput);
  }
}

// Error Function
function setError(input, message) {
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small"); 
  formControl.classList.add("error"); 
  small.innerText = message; 
  small.style.visibility = "visible";
}

// Succsess Function
function setSuccess(input) {
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small"); 
  formControl.classList.remove("error"); 
  formControl.classList.add("success"); 
  small.style.visibility = "hidden"; 
}

// ValidEmail Function
function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email); 
}

// ValidPassword Function
function isValidPassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; 
  return re.test(password); 
}
