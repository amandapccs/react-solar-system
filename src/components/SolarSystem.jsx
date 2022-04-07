import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="Planets">
          { planets.map((planet, i) => (<PlanetCard
            planetName={ planet.name }
            key={ i }
            planetImage={ planet.image }
          />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
