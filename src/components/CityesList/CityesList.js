import React, {Component} from 'react'
import {connect} from 'react-redux'
import City from './City/City'
import {delateCity} from '../../store/actions/city'

class CitysList extends Component{
  
  render(){
    return(
      <ul className="list-group mt-3">
        {this.props.cityes.length!==0
          ?  this.props.cityes.map((city, index)=>{
            return( 
              <City
                  key = {index}
                  weather = {city}
                  delateInfo = {this.props.delateCity}
              />)
          })
          : null}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    cityes: state.cityes.cityes,
  }
}

function mapDispatchToProps(dispatch){
  return {
    delateCity:id => dispatch(delateCity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitysList)