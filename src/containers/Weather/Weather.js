import React, { Component } from 'react'
import './Weather.css'
import InputCity from '../../components/InputCity/InputCity'
import CityesList from '../../components/CityesList/CityesList'
import {connect} from 'react-redux'
import {fetchNewCity} from '../../controllers/cityController'


class Weather extends Component{

  render(){
    return(
      <div className='container'>
        <div className="col justify-content-md-center">
          <InputCity 
            errorMesage = {this.props.errorMesage}
            fetchNewCity={this.props.fetchNewCity}
            />
          <CityesList/>
        </div>
      </div>
      )   
  }
}

function mapStateToProps(state){
  return{
    errorMesage: state.error.error
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchNewCity:(cityName)=>dispatch(fetchNewCity(cityName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)