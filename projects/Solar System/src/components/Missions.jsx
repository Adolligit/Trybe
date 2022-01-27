import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  CreateMissions() {
    return (
      missions.map((mission) => (
        <MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />
      ))
    );
  }

  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ol>
          { this.CreateMissions() }
        </ol>
      </div>
    );
  }
}

export default Missions;
