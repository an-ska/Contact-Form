export const isFieldEmpty = (value) => {
  return value === ""
}

export const isEmailInvalid = (email) => {
  const pattern = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2}(?:[a-zA-Z0-9-]*[a-zA-Z0-9])?"

  return !email.match(pattern)
}

export const isPhoneInvalid = (phone) => {
  const pattern = "^[0-9]{9}$"

  return !phone.match(pattern)
}

export const isNameInvalid = (name) => {
  return name.length > 30
}

export const isMessageInvalid = (message) => {
  return message.length > 300
}
