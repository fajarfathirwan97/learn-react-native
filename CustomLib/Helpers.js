import { trans } from '../Lang'

export const validator = (type, input) => {
  let status
  switch (type) {
  case 'required':
    status = required(input)
    break
  case 'number':
    status = number(input)
    break

  default:
    break
  }
  return { status: status, message: trans(`en.validate.${type}`) }
}
const required = (input) => {
  input = input.trim()
  return input != ''
}

const number = (input) => {
  input = parseInt(input.trim() || 0)
  return !isNaN(input)
}

export const isTrue = (input) => {
  return input === true
}

export const checkValidation = (textInput, focusToCallback) => {
  let validate = []
  let focus = ''
  let _textInput = textInput
  for (let textInputKey in _textInput) {
    let result = _textInput[textInputKey].validate()
    validate.push(result.error)
    if (!result.error && result.message && !focus)
      focus = textInputKey
  }
  if (focus) {
    focusToCallback(focus)    
  }
  return {
    status: validate.every(isTrue),
  }
}