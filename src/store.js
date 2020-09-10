import { createStore, combineReducers } from 'redux'

const initialState = {
  login : false,
  user : {
    name : '',
    id : null
  }
}

function useReducer(state= initialState, action){
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'USER_LOGIN' : {
      return state
    }
    case 'USER_LOGOUT' : {
      return state
    }
    default : 
      return state
  }
}

const initialBookState = {
  book : []
}

function bookReducer(state= initialBookState, action){
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_BOOK' : {
      return state
    }
    case 'REMOVE_BOOK' : {
      return state
    }
    default : 
      return state
  }
}

const rootReducer = combineReducers({useReducer, bookReducer})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())