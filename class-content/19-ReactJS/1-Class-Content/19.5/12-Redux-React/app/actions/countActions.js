export function incrementCount() {
  return {
    type: 'INC_COUNT',
    payload: 1
  }
}

export function decrementCount() {
  return {
    type: 'DEC_COUNT',
    payload: 1
  }
}
