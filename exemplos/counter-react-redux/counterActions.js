export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const stepChanged = e => {
  return {
    type: 'STEP_CHANGED',
    payload: Number(e.target.value)
  }
}
