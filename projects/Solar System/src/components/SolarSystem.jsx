import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

import planets from '../data/planets';

class SolarSystem extends React.Component {
  createPlanets() {
    return (
      planets.map(({ name, image }) => (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />))
    );
  }

  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { this.createPlanets() }
      </div>
    );
  }
}

export default SolarSystem;
