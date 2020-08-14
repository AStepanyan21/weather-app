import {ADD_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE} from '../actions/actionTypes'

const initialStayt = {
  error:false
}

export default function errorReduser(state = initialStayt, action){
  switch(action.type){
  case ADD_ERROR_MESSAGE:
    return {
      ...state, error: true
    }
  case CLEAR_ERROR_MESSAGE:
    return{
      ...state, error: false
    }
  default:
    return state
    }
  }