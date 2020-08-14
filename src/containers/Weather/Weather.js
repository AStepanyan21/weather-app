import React, { Component } from 'react'
import './Weather.css'
import InputCity from '../../components/InputCity/InputCity'
import CityesList from '../../components/CityesList/CityesList'


class Weather extends Component{
  render(){
    return(
      <div className='container'>
        <div className="col justify-content-md-center">
          <InputCity />
          <CityesList/>
        </div>
      </div>
      )   
  }
}
export default Weather