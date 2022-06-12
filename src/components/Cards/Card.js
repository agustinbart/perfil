import './Cards.css';
import React from 'react';
import {Button} from 'react-bootstrap';

function Card(props) {
  console.log()
  return (
    <div className='card'>
      <img src={props.image} alt='' className='cardimg' />
      <div className='card-body'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-info'>{props.info}</p>
        <Button className='cards-btn'>Más información</Button>
      </div>
    </div>
  )
};

export default Card;