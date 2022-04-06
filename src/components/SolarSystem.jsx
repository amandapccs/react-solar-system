import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((planet, i) => (<PlanetCard
          planetName={ planet.name }
          key={ i }
          planetImage={ planet.image }
        />)) }
      </div>
    );
  }
}

export default SolarSystem;
