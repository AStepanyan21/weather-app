import {DELATE_CITY, ADD_CITY} from '../actions/actionTypes'

const initialStayt = {
  cityes:[]
}

export default function cityesReduser(state = initialStayt, action){
  switch(action.type){
    case DELATE_CITY:
      const newListCity = state.cityes.filter( cityes => action.id !== cityes.id)
      return {
        ...state,cityes:[...newListCity]
      }
    case ADD_CITY:
      return {
        ...state, cityes:[...state.cityes, action.newCity]
      }
    default:
      return state
    }
}