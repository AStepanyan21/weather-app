import CityController from '../controllers/cityController'
import SdkManager from './sdkManeger'
import SelectorManager from './selectorManager'

const cityController = new CityController(SelectorManager.citySelector ,SdkManager.addCitySDK)

export {
    cityController
}