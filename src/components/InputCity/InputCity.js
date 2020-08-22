import React, { useState }from 'react'

import './InputCity.css'

const InputCity = props =>{
  const [city, setCity] = useState({name:''})
  const cityValue = (event)=>{
    setCity({name: event.target.value})
    
  }
  const addCity = (event) =>{
    props.fetchNewCity(city.name)
    setCity({name: ''})
    event.preventDefault()
  }
  return(
    <form className = "mt-3">
      <div className="form-group">
        <label >City name</label>
        <input type="text" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          value = {city.name}
          onChange = {cityValue}
        />
        {props.errorMesage
        ? <small id="emailHelp" 
           className="form-text text-muted"
          >
          Something went wrong
          </small>
           :null 
           }
      </div>
        
      <button 
        type="submit" 
        className="btn btn-primary"
        onClick = {addCity}
      >Submit</button>
    </form>
  )
}



export default InputCity