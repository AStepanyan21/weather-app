import {API_KEY} from '../API/apiKey'
import {
    addNewCity, 
    startErrorMessage, 
    clearErrorMessage,
    startLoading} from '../store/actions/city'

export function fetchNewCity(cityName){
  return dispatch =>{
    dispatch(startLoading())
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