import React, { Component } from 'react'
import {connect} from 'react-redux'
import InputCity from '../../components/InputCity/InputCity'
import CityesList from '../../components/CityesList/CityesList'
import {cityController} from '../../core/managers/conrollerManeger'
import {delateCity} from '../../core/store/actions/city'
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
            delateCity = {this.props.delateCity}
          />
        </div>
      </div>
      )   
  }
}

function mapStateToProps(state){
  return{
    errorMesage: state.error.error,
    cityes: state.cityes.cityes,
  }
}

function mapDispatchToProps(dispatch){
  return{
    cityController: (payload)=>dispatch(cityController.addNewCity(payload)),
    delateCity: id => dispatch(delateCity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)