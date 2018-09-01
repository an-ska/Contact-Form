import "../styles/index.scss"
import * as formValidation from './validate.js';

let isEmailValid = () => {
  const userEmail = document.getElementById("email").value
  const errorEmailElement = document.getElementById("errorEmail")

  const emptyEmail = formValidation.checkIfEmptyField(userEmail)
  const invalidEmail = formValidation.validateEmail(userEmail)

  if (emptyEmail) {
    errorEmailElement.innerHTML = "Please fill in the email field"
  } else if (invalidEmail) {
    errorEmailElement.innerHTML = "Please correct the email"
  } else {
    return true
  }
}

let isPhoneValid = () => {
  const userPhone = document.getElementById("phone").value
  const errorPhoneElement = document.getElementById("errorPhone")

  const emptyPhone = formValidation.checkIfEmptyField(userPhone)
  const invalidPhone = formValidation.validatePhone(userPhone)

  if (emptyPhone) {
    errorPhoneElement.innerHTML = "Please fill in the phone field"
  } else if (invalidPhone) {
    errorPhoneElement.innerHTML = "Please correct the phone"
  } else {
    return true
  }
}

let isNameValid = () => {
  const userName = document.getElementById("name").value
  const errorNameElement = document.getElementById("errorName")

  const invalidName = formValidation.validateName(userName)

  if (invalidName) {
    errorNameElement.interHTML = "Please provide no more than 30 characters"
  } else {
    return true
  }
}

let isMessageValid = () => {
  const userMessage = document.getElementById("message").value
  const errorMessageElement = document.getElementById("errorMessage")

  const emptyMessage = formValidation.checkIfEmptyField(userMessage)
  const invalidMessage = formValidation.validateMessage(userMessage)

  if (emptyMessage) {
    errorMessageElement.innerHTML = "Please fill in the message field"
  } else if (invalidMessage) {
    errorMessageElement.innerHTML = "Please provide no more than 300 characters"
  } else {
    return true
  }
}

const validateForm = () => {
  const validEmail = isEmailValid()
  const validPhone = isPhoneValid()
  const validName =  isNameValid()
  const validMessage = isMessageValid()

  if (validEmail && validPhone && validName && validMessage) {
    return true
  }
  return
}

const onFormSubmit = (event) => {
  event.preventDefault()

  const form = document.getElementById("contactForm")
  const successElement = document.getElementById("success")
  const validForm = validateForm()

  if (validForm) {
    form.reset()
    successElement.innerHTML = "Thank you! Form was submitted"
  }
}

const onDocumentLoad = () => {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", onFormSubmit)
}

document.addEventListener("DOMContentLoaded", onDocumentLoad);
