import React from 'react';

class MissionCard extends React.Component {
  render() {
    return (
      <li data-testid="mission-card">
        {
          Object.entries(this.props)
            .map((prop) => (
              <p
                key={ prop[1] }
                data-testid={ `mission-${prop[0]}` }
              >
                { prop[1] }
              </p>
            ))
        }
      </li>
    );
  }
}

export default MissionCard;
