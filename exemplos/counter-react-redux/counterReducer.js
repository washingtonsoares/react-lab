const INITIAL_STATE = {
  step: 1,
  value: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + state.step
      }
      break
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - state.step
      }
      break
    case 'STEP_CHANGED':
      return {
        ...state,
        step: action.payload
      }
    default:
      return state
  }
}
