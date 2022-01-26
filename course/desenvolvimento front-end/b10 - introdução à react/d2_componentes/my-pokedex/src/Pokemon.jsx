import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render() {
    const { name, type, averageWeight, image } = this.props.deita;
    return (
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Tipo: {type}</p>
        <p>Peso: {averageWeight.value}</p>
        <p>Uni. Medida: {averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

Pokemon.propTypes = {
  deita: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default Pokemon;