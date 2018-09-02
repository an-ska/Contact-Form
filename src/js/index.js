import "../styles/variables.scss"
import "../styles/index.scss"
import "../styles/form.scss"
import * as formValidation from './validate.js'

const isEmailValid = () => {
  const userEmailElement = document.getElementById("email")
  const userEmail = document.getElementById("email").value
  const container = document.querySelector('[data-name="email"]')

  const emptyField = formValidation.checkIfEmptyField(userEmail)
  const invalidField = formValidation.validateEmail(userEmail)

  if (emptyField) {
    setErrorMessage(container, "Please fill in the email field")
    userEmailElement.classList.add("errorField")
  } else if (invalidField) {
    setErrorMessage(container, "Please correct the email")
    userEmailElement.classList.add("errorField")
  } else {
    setErrorMessage(container, "")
    userEmailElement.classList.remove("errorField")
    return true
  }
}

const isPhoneValid = () => {
  const userPhoneElement = document.getElementById("phone")
  const userPhone = document.getElementById("phone").value
  const container = document.querySelector('[data-name="phone"]')

  const emptyField = formValidation.checkIfEmptyField(userPhone)
  const invalidField = formValidation.validatePhone(userPhone)

  if (emptyField) {
    setErrorMessage(container, "Please fill in the phone field")
    userPhoneElement.classList.add("errorField")
  } else if (invalidField) {
    setErrorMessage(container, "Please correct the phone")
    userPhoneElement.classList.add("errorField")
  } else {
    setErrorMessage(container, "")
    userPhoneElement.classList.remove("errorField")
    return true
  }
}

const isNameValid = () => {
  const userNameElement = document.getElementById("name")
  const userName = document.getElementById("name").value
  const container = document.querySelector('[data-name="name"]')

  const invalidField = formValidation.validateName(userName)

  if (invalidField) {
    setErrorMessage(container, "Please provide no more than 30 characters")
    userNameElement.classList.add("errorField")
  } else {
    setErrorMessage(container, "")
    userNameElement.classList.remove("errorField")
    return true
  }
}

const isMessageValid = () => {
  const userMessageElement = document.getElementById("message")
  const userMessage = document.getElementById("message").value
  const container = document.querySelector('[data-name="message"]')

  const emptyField = formValidation.checkIfEmptyField(userMessage)
  const invalidField = formValidation.validateMessage(userMessage)

  if (emptyField) {
    setErrorMessage(container, "Please fill in the message field")
    userMessageElement.classList.add("errorField")
  } else if (invalidField) {
    setErrorMessage(container, "Please provide no more than 300 characters")
    userMessageElement.classList.add("errorField")
  } else {
    setErrorMessage(container, "")
    userMessageElement.classList.remove("errorField")
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

const setErrorMessage = (container, message) => {
  const errorElement = container.querySelector(".error")

  errorElement.innerHTML = message
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

    firstInvalidField.scrollIntoView({behavior: "smooth"})
  }
}

const onDocumentLoad = () => {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", onFormSubmit)
}

document.addEventListener("DOMContentLoaded", onDocumentLoad);
