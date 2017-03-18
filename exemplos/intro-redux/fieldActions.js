export const changeValue = e => {
  console.log('funcionando')
  return {
    type: 'VALUE_CHANGED',
    payload: e.target.value
  }
}
