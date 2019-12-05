import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, origin, life, temperament, weight, description }) => (
    <div className="card">
        <h3>{name}</h3>
        <div className="img-container">
           <img className="img" src='https://i.postimg.cc/MKQPZ1f0/28ce47f399a07c53c9d56e815b95c20e.jpg'/>
        </div>
        <p>Description: {description}</p>
        <p>Origin: {origin}</p>
        <p>Life span: {life} </p>
        <p>Temperament: {temperament} </p>
        <p>Weight: {weight} </p>
    </div>
)

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    life: PropTypes.string.isRequired,
    temperament: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired
}

export default Card;