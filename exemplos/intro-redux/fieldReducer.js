const INITIAL_VALUE = {
  value: 'opa'
}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'VALUE_CHANGED':
      return {
        value: action.payload
      }
      break;
    default:
      return state
  }
}
