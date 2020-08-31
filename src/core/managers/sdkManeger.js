import AddCitySDK from '../api-sdk/addCitySDK'
import ServiceManager from './serviceManager'

const addCitySDK = new AddCitySDK(ServiceManager.networkService)

export default {
    addCitySDK
}