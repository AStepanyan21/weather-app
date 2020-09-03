import React from 'react'


const City = (props) => {
  return(
    <li className="list-group-item d-flex justify-content-between">
      <span>
        {props.weather.name + " "}
        {props.weather.temperatura}
      </span>
      <button 
        type="button" 
        className="btn btn-danger " 
        onClick = {()=>props.deleteInfo(props.weather.id)}
      >Delate</button>
    </li>
  )
}

export default City