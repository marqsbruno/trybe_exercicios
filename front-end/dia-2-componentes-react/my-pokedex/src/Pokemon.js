import React from "react";
import PropTypes from 'prop-types';
import './index.css';

class Pokemon extends React.Component {
    render(){
        const { poke: { name, type, averageWeight, image } } = this.props;
       return (
            <div className="pokemon">
                <p>{name}</p>
                <p>{type}</p>
                <p>Peso médio: {averageWeight.value} {averageWeight.measurementUnit}</p>
                <div>
                <img src={image} alt={name} />
                </div>
            </div>
       ) 
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };
  
export default Pokemon;