import React from 'react'

const Card = (props) => {
    console.log(props);

  return (
    <div className="card">
        <img src={props.image}/>
        <h1>{props.user}</h1>
        <h4>{props.age} Years</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, est.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card