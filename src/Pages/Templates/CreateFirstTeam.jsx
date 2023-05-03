/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import { React, useState } from 'react';
import quest from './quest.svg';
import Header from '../../Components/Atoms/Headings/Header';
import Input from '../../Components/Atoms/Inputs/Input';
import Button from '../../Components/Atoms/Buttons/Button';
import './CreateFirst.css';

function CreateFirstTeam() {
  const [members, setMembers] = useState([]);

  const handleInvite = (e) => {
    e.preventDefault();
    const data = e.target.email.value;
    setMembers([...members, data]);
    e.target.email.value = '';
  };

  function deleteInvitation(id) {
    const filter = members.filter((elements) => {
      return elements !== id;
    });
    setMembers(filter);
  }

  return (
    <div className="creatz">
      <div>
        <img className="imagez" alt="" src={quest} />
      </div>
      <div className="infoz">
        <Header title="Welcome to Questify" />
        <h2>
          let's create your workspace. A space for teams to collaborate,
          organize, and share project boards.
        </h2>
        <div className="detailz">
          <p className="inputx">Name your workspace</p>
          <Input type="text" placeholder="Questify Workspace" />
          <p>You can also edit this name in your work space </p>
          <p className="inputx">Who's on your team? </p>
          <form className="addTeam" onSubmit={handleInvite}>
            <Input
              type="text"
              placeholder="Enter as many email address as you want..."
              name="email"
            />
            <Button title="add" />
          </form>
          <div className="team">
            {members?.map((team, i) => {
              return (
                <div key={i} className="teamMember invitations">
                  <p>&#x2713;</p>
                  <p> {team} </p>
                  <p onClick={() => deleteInvitation(team)} className="cross">
                    &#x2717;
                  </p>
                </div>
              );
            })}
          </div>
          <p>
            Invite your team members so they can see what you are working on.
          </p>
        </div>
        <Button title="Create your workspace" />
      </div>
    </div>
  );
}

export default CreateFirstTeam;
