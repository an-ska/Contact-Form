export const checkIfEmptyField = (value) => {
  return value === ""
}

export const validateEmail = (email) => {
  const pattern = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2}(?:[a-zA-Z0-9-]*[a-zA-Z0-9])?"

  return !email.match(pattern)
}

export const validatePhone = (phone) => {
  const pattern = "^[0-9]{9}$"

  return !phone.match(pattern)
}

export const validateName = (name) => {
  return name.length > 30
}

export const validateMessage = (message) => {
  return message.length > 300
}
