import {API_KEY} from '../../API/apiKey'
import {addNewCity, 
        startErrorMessage, 
        clearErrorMessage,
        startLoading} from '../store/actions/city'

class CityController {
  constructor(selector, sdk){
    this._sdk = sdk
    this._selector = selector
  }

  addNewCity(payload){
    return async (dispatch)=>{
      try {
        dispatch(startLoading({loading: true}))
        const city= payload.city
        if (!city) return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        const data = await this._sdk.addCity(url)
        const newCity = {
          name: data.name , 
          temperatura: data.main.temp,
          id: Date.now()
        }
        dispatch(addNewCity(newCity))
      } catch(e){    
        dispatch(startErrorMessage())
        setTimeout(()=>{
          dispatch(clearErrorMessage())
        },5000)
      } finally{
      dispatch(startLoading({loading: true}))
      }
    } 
  }
}
export default CityController
