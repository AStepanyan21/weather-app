import {DELATE_CITY, ADD_CITY, ADD_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE} from './actionTypes'
import {API_KEY} from '../../API/apiKey'

export function delateCity(id){
    return {
        type: DELATE_CITY,
        id
    }
        
}

export function fetchNewCity(cityName){
  return dispatch =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const newCity = {
            name: data.name , 
            temperatura: data.main.temp,
            id: Date.now()
          }
      dispatch(addNewCity(newCity))
    })
    .catch((e)=>{
      console.log(e)
      dispatch(startErrorMessage())
      setTimeout(()=>{
        dispatch(clearErrorMessage())
      },5000)
    }
    )
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