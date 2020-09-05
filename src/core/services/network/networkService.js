import {AppConstants} from '../../settings/constants'

class NetworkService {

  makeAPIGetRequest = (url) => {
    return this.makeAPIRequest(
      url, 
      this._getOptions(AppConstants.network.network_request_methods.GET))
  }

  makeAPIPostRequest = (url, data = null) => {
    return this.makeAPIRequest(
      url, 
      this._getOptions(AppConstants.network.network_request_methods.POST, data))
  }

  makeAPIDeleteRequest = (url) => {
    return this.makeAPIRequest(
      url, 
      this._getOptions(AppConstants.network.network_request_methods.DELETE))
  }

  makeAPIPatchRequest = (url, data = null) => {
    return this.makeAPIRequest(
      url, 
      this._getOptions(AppConstants.network.network_request_methods.PATCH, data))
  }

  makeAPIPutRequest = (url, data = null) => {
    return this.makeAPIRequest(
      url, 
      this._getOptions(AppConstants.network.network_request_methods.PUT, data))
  }

  makeAPIRequest(url,  options){
    async function postData(url, options){
      const response = await fetch(url, options)
      return await response.json()
    }
    return postData(url, options)
  }

  _getOptions = (method, data)=>{
    const options ={
       method: method, 
       data : data || {} ,
       headers: {
        'Accept': 'application/json',
      }
     }
     return options
   }
}

export default NetworkService