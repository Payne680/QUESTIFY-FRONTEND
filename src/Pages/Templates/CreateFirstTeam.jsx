import React from 'react';
import quest from './quest.svg';
import Header from '../../Core/Components/Atoms/Header';

function CreateFirstTeam() {
  return (
    <div className="creatz">
      <div>
        {' '}
        <img className="imagez" alt="" src={quest} />
      </div>
      <div className="infoz">
        <Header title="Welcome to Questify" />
      </div>
    </div>
  );
}

export default CreateFirstTeam;
