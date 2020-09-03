import {DELATE_CITY, 
    ADD_CITY, 
    ADD_ERROR_MESSAGE, 
    CLEAR_ERROR_MESSAGE, 
    LOADING} from './actionTypes'

export function deleteCity(id){
  return {
    type: DELATE_CITY,
    id
  }        
}

export function startLoading(loading){
  return{
    type: LOADING,
    loading
  }
}

export function addNewCity(payload){
  return {
    type: ADD_CITY,
    payload
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