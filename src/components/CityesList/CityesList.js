import React, {Component} from 'react'
import City from './City/City'

class CitysList extends Component{
  
  render(){
    return(
      <ul className="list-group mt-3">
        {this.props.cityes.length !== 0
          ?  this.props.cityes.map((city, index)=>{
            return( 
              <City 
                  key = {index}
                  weather = {city}
                  deleteInfo = {this.props.deleteCity}
              />)
          })
          : null}
      </ul>
    )
  }
}


export default CitysList