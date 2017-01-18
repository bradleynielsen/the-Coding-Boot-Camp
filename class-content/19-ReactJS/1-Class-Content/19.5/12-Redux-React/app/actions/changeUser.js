export function changeUser() {
  return {
    type: 'CHANGE_USER'
  }
}

export function changeTextField(input) {
  return {
    type: 'CHANGE_TEXTFIELD',
    payload: input
  }
}