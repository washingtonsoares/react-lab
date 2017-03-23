import axios from 'axios'
const URL = 'http://localhost:3003/api/todos'

export const changeDescription = e => ({
  type: 'CHANGE_DESCRIPTION',
  payload: e.target.value
})

export const search = (description = '') => {
  const search = description ? `&description__regex=/${description}/` : ''
  const request = axios.get(`${URL}?sort=-createdAt${search}`)
  return {
    type: 'SEARCH',
    payload: request
  }
}

export const add = description => {
  return dispatch => {
    axios.post(URL, { description })
      .then(resp => dispatch(clearDescriptionAndSearch()))
  }
}

export const toggleTodo = item => {
  const request = axios.put(`${URL}/${item._id}`, {...item, done: !item.done})
  return {
    type: 'TOGGLE_TODO',
    payload: request
  }
}

export const clearDescriptionAndSearch = () => {
  return [{ type: 'CLEAR' }, search()]
}

export const remove = item => {
  const request = axios.delete(`${URL}/${item._id}`)
  return {
    type: 'REMOVE',
    payload: request,
    removedItem: item
  }
}
