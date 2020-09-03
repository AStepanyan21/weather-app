import React, { Component } from 'react'
import {connect} from 'react-redux'
import InputCity from '../../components/InputCity/InputCity'
import CityesList from '../../components/CityesList/CityesList'
import {cityController} from '../../core/managers/controllerManager'
import {deleteCity} from '../../core/store/actions/city'
import selectorManager from '../../core/managers/selectorManager'
import './Weather.css'

class Weather extends Component{

  render(){
    return(
      <div className='container'>
        <div className="col justify-content-md-center">
          <InputCity 
            errorMesage = {this.props.errorMesage}
            cityController={this.props.cityController}
            />
          <CityesList
            cityes = {this.props.cityes}
            deleteCity = {this.props.deleteCity}
          />
        </div>
      </div>
      )   
  }
}

function mapStateToProps(state){
  return{
    errorMesage: selectorManager.citySelector.getErrorMesage(state),
    cityes: selectorManager.citySelector.getCityes(state),
  }
}

function mapDispatchToProps(dispatch){
  return{
    cityController: (payload)=>dispatch(cityController.addNewCity(payload)),
    deleteCity: id => dispatch(deleteCity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)