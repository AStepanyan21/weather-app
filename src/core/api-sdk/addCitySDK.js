class AddCitySDK {
  constructor(network_service){
    this._network_service = network_service
  }

  addCity(url){
    return this._network_service.makeAPIGetRequest(url)
  }
}

export default  AddCitySDK