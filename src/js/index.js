import "../styles/variables.scss"
import "../styles/index.scss"
import "../styles/form.scss"
import * as formValidation from './validate.js'

const isEmailValid = () => {
  const userEmail = document.getElementById("email").value
  const container = document.querySelector('[data-name="email"]')

  if (formValidation.isFieldEmpty(userEmail)) {
    addErrorMessage(container, "Please fill in the email field")
    markField(container)
    return false
  } else if (formValidation.isEmailInvalid(userEmail)) {
    addErrorMessage(container, "Please correct the email")
    markField(container)
    return false
  } else {
    removeErrorMessage(container)
    unmarkField(container)
    return true
  }
}

const isPhoneValid = () => {
  const userPhone = document.getElementById("phone").value
  const container = document.querySelector('[data-name="phone"]')

  if (formValidation.isFieldEmpty(userPhone)) {
    addErrorMessage(container, "Please fill in the phone field")
    markField(container)
    return false
  } else if (formValidation.isPhoneInvalid(userPhone)) {
    addErrorMessage(container, "Please correct the phone in format xxxxxxxxx")
    markField(container)
    return false
  } else {
    removeErrorMessage(container)
    unmarkField(container)
    return true
  }
}

const isNameValid = () => {
  const userName = document.getElementById("name").value
  const container = document.querySelector('[data-name="name"]')

  if (formValidation.isNameInvalid(userName)) {
    addErrorMessage(container, "Please provide no more than 30 characters")
    markField(container)
    return false
  } else {
    removeErrorMessage(container)
    unmarkField(container)
    return true
  }
}

const isMessageValid = () => {
  const userMessage = document.getElementById("message").value
  const container = document.querySelector('[data-name="message"]')

  if (formValidation.isFieldEmpty(userMessage)) {
    addErrorMessage(container, "Please fill in the message field")
    markField(container)
    return false
  } else if (formValidation.isMessageInvalid(userMessage)) {
    addErrorMessage(container, "Please provide no more than 300 characters")
    markField(container)
    return false
  } else {
    removeErrorMessage(container)
    unmarkField(container)
    return true
  }
}

const isFormValid = () => {
  const validEmail = isEmailValid()
  const validPhone = isPhoneValid()
  const validName = isNameValid()
  const validMessage = isMessageValid()

  return (validEmail && validPhone && validName && validMessage)
}

const addErrorMessage = (container, message) => {
  const errorElement = container.querySelector('[data-name="error"]')

  errorElement.innerHTML = message
}

const removeErrorMessage = (container) => {
  const errorElement = container.querySelector('[data-name="error"]')

  errorElement.innerHTML = ""
}

const markField = (container) => {
  const element = container.querySelector('[data-name="input"]').classList

  element.add("errorField")
}

const unmarkField = (container) => {
  const element = container.querySelector('[data-name="input"]').classList

  element.remove("errorField")
}

const onFormSubmit = (event) => {
  event.preventDefault()

  const form = document.getElementById("contactForm")
  const successElement = document.getElementById("success")

  if (isFormValid()) {
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
