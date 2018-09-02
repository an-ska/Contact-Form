import "../styles/index.scss"
import "../styles/form.scss"
import * as formValidation from './validate.js';

const isEmailValid = () => {
  const userEmailElement = document.getElementById("email")
  const userEmail = document.getElementById("email").value
  const errorEmailElement = document.getElementById("errorEmail")

  const emptyField = formValidation.checkIfEmptyField(userEmail)
  const invalidField = formValidation.validateEmail(userEmail)

  userEmailElement.classList.remove("errorField")

  if (emptyField) {
    errorEmailElement.innerHTML = "Please fill in the email field"
    userEmailElement.classList.add("errorField")
  } else if (invalidField) {
    errorEmailElement.innerHTML = "Please correct the email"
    userEmailElement.classList.add("errorField")
  } else {
    errorEmailElement.innerHTML = ""
    return true
  }
}

const isPhoneValid = () => {
  const userPhoneElement = document.getElementById("phone")
  const userPhone = document.getElementById("phone").value
  const errorPhoneElement = document.getElementById("errorPhone")

  const emptyField = formValidation.checkIfEmptyField(userPhone)
  const invalidField = formValidation.validatePhone(userPhone)

  userPhoneElement.classList.remove("errorField")

  if (emptyField) {
    errorPhoneElement.innerHTML = "Please fill in the phone field"
    userPhoneElement.classList.add("errorField")
  } else if (invalidField) {
    errorPhoneElement.innerHTML = "Please correct the phone"
    userPhoneElement.classList.add("errorField")
  } else {
    errorPhoneElement.innerHTML = ""
    return true
  }
}

const isNameValid = () => {
  const userNameElement = document.getElementById("name")
  const userName = document.getElementById("name").value
  const errorNameElement = document.getElementById("errorName")

  const invalidField = formValidation.validateName(userName)

  userNameElement.classList.remove("errorField")

  if (invalidField) {
    errorNameElement.interHTML = "Please provide no more than 30 characters"
    userNameElement.classList.add("errorField")
  } else {
    errorNameElement.interHTML = ""
    return true
  }
}

const isMessageValid = () => {
  const userMessageElement = document.getElementById("message")
  const userMessage = document.getElementById("message").value
  const errorMessageElement = document.getElementById("errorMessage")

  const emptyField = formValidation.checkIfEmptyField(userMessage)
  const invalidField = formValidation.validateMessage(userMessage)

  userMessageElement.classList.remove("errorField")

  if (emptyField) {
    errorMessageElement.innerHTML = "Please fill in the message field"
    userMessageElement.classList.add("errorField")
  } else if (invalidField) {
    errorMessageElement.innerHTML = "Please provide no more than 300 characters"
    userMessageElement.classList.add("errorField")
  } else {
    errorMessageElement.innerHTML = ""
    return true
  }
}

const validateForm = () => {
  const validEmail = isEmailValid()
  const validPhone = isPhoneValid()
  const validName =  isNameValid()
  const validMessage = isMessageValid()

  return (validEmail && validPhone && validName && validMessage)
}

const onFormSubmit = (event) => {
  event.preventDefault()

  const form = document.getElementById("contactForm")
  const successElement = document.getElementById("success")
  const validForm = validateForm()

  if (validForm) {
    form.reset()
    successElement.innerHTML = "Thank you! Form was submitted"
  } else {
    const errorElements = [...document.querySelectorAll(".error")]
    const firstInvalidField = errorElements.find(error => error.innerHTML.length > 0)

    // firstInvalidField.scrollIntoView({behavior: "smooth"}) // smooth behaviour is not fully supported https://caniuse.com/#feat=scrollintoview
    firstInvalidField.scrollIntoView()
  }
}

const onDocumentLoad = () => {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", onFormSubmit)
}

document.addEventListener("DOMContentLoaded", onDocumentLoad);
