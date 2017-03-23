const INITIAL_STATE = {
  description: '',
  list: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case 'CHANGE_DESCRIPTION':
      return {
        ...state,
        description: action.payload
      }
    case 'SEARCH':
      return {
        ...state,
        list: action.payload.data
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        list: markTodoItemAsDoneInList(state.list, action.payload.data)
      }
    case 'REMOVE':
      return {
        ...state,
        list: removeTodoItemFromList(state.list, action.removedItem)
      }
    case 'CLEAR':
      return {
        ...state,
        description: ''
      }
    default:
      return state
  }
}

const removeTodoItemFromList = (list, removedItem) => {
  return list.filter(item => item._id !== removedItem._id)
}

const markTodoItemAsDoneInList = (list, itemUpdated) => {
  return list.map(item => {
    if (item._id !== itemUpdated._id) {
      return item
    }
    return {
      ...item,
      done: !item.done
    }
  })
}

export default todoReducer
