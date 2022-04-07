import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="all-missions">
          { missions.map((mission, i) => (<MissionCard
            key={ i }
            year={ mission.year }
            name={ mission.name }
            country={ mission.country }
            destination={ mission.destination }
          />)) }
        </div>
      </div>
    );
  }
}

export default Missions;
