import {combineReducers} from 'redux'
import cityesReduser from './cityes'
import errorReduser from  './error'

export default  combineReducers({
    cityes: cityesReduser,
    error: errorReduser
})
