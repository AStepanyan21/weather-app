import CityController from '../controllers/cityController'
import SdkManager from './sdkManeger'

const cityController = new CityController(SdkManager.addCitySDK)

export {
    cityController
}