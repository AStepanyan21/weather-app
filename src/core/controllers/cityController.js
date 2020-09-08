import {AppConstants} from '../settings/constants'
import {addNewCity, 
        startErrorMessage, 
        clearErrorMessage,
        startLoading} from '../store/actions/city'

class CityController {
  constructor(sdk){
    this._sdk = sdk
  }

  addNewCity(payload){
    return async (dispatch)=>{
      try {
        dispatch(startLoading({loading: true}))
        const city= payload.city
        if (!city) return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${AppConstants.network.API_KEY}`
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
      dispatch(startLoading({loading: false}))
      }
    } 
  }
}
export default CityController
