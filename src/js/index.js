import "../styles/variables.scss"
import "../styles/index.scss"
import "../styles/form.scss"
import * as formValidation from './validate.js'

const isEmailValid = () => {
  const userEmail = document.getElementById("email").value
  const container = document.querySelector('[data-name="email"]')

  if (formValidation.isFieldEmpty(userEmail)) {
    setErrorMessage(container, "Please fill in the email field")
    setErrorField(container, true)
  } else if (formValidation.isEmailInvalid(userEmail)) {
    setErrorMessage(container, "Please correct the email")
    setErrorField(container, true)
  } else {
    setErrorMessage(container, "")
    setErrorField(container, false)

    return true
  }
}

const isPhoneValid = () => {
  const userPhone = document.getElementById("phone").value
  const container = document.querySelector('[data-name="phone"]')

  if (formValidation.isFieldEmpty(userPhone)) {
    setErrorMessage(container, "Please fill in the phone field")
    setErrorField(container, true)
  } else if (formValidation.isPhoneInvalid(userPhone)) {
    setErrorMessage(container, "Please correct the phone")
    setErrorField(container, true)
  } else {
    setErrorMessage(container, "")
    setErrorField(container, false)

    return true
  }
}

const isNameValid = () => {
  const userName = document.getElementById("name").value
  const container = document.querySelector('[data-name="name"]')

  if (formValidation.isNameInvalid(userName)) {
    setErrorMessage(container, "Please provide no more than 30 characters")
    setErrorField(container, true)
  } else {
    setErrorMessage(container, "")
    setErrorField(container, false)

    return true
  }
}

const isMessageValid = () => {
  const userMessage = document.getElementById("message").value
  const container = document.querySelector('[data-name="message"]')

  if (formValidation.isFieldEmpty(userMessage)) {
    setErrorMessage(container, "Please fill in the message field")
    setErrorField(container, true)
  } else if (formValidation.isMessageInvalid(userMessage)) {
    setErrorMessage(container, "Please provide no more than 300 characters")
    setErrorField(container, true)
  } else {
    setErrorMessage(container, "")
    setErrorField(container, false)

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

const setErrorField = (container, flag) => {
  const element = container.querySelector('[data-name="input"]').classList

  flag ? element.add("errorField") : element.remove("errorField")
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
