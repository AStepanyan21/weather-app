import {DELATE_CITY, 
    ADD_CITY, 
    ADD_ERROR_MESSAGE, 
    CLEAR_ERROR_MESSAGE, 
    LOADING} from './actionTypes'

export function delateCity(id){
    return {
        type: DELATE_CITY,
        id
    }
        
}

export function startLoading(){
  return{
    type: LOADING
  }
}

export function addNewCity(newCity){
  return {
    type: ADD_CITY,
    newCity
  }
}


export function startErrorMessage(){
  return{
    type:ADD_ERROR_MESSAGE,
  }
}

export function clearErrorMessage(){
  return{
    type:CLEAR_ERROR_MESSAGE,
  }
}