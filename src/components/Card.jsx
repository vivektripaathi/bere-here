import React from 'react';

const Card = (props) => {
    return (
        <div className = 'card'>
          <img src={props.img} alt="Sorry! preview unavailable."></img>
          <h1>{props.name}</h1>
          <p className ="tagline">{props.tagline}</p>
          <p className="description">{props.description}</p>  
        </div>
    )
}

export default Card;
