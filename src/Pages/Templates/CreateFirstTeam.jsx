/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import quest from './quest.svg';
import Header from '../../Components/Atoms/Headings/Header';
import Input from '../../Components/Atoms/Inputs/Input';
import Button from '../../Components/Atoms/Buttons/Button';
import Footerdesign from './Footerdesign';

function CreateFirstTeam() {
  return (
    <div>
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
            <Input
              type="text"
              placeholder="Enter as many email address as you want..."
            />
            <p>
              Invite your team members so they can see what you are working on.
            </p>
          </div>

          <Link to="/dashboard">
            <Button title="Create your workspace" />{' '}
          </Link>
        </div>
      </div>
      <Footerdesign />
    </div>
  );
}

export default CreateFirstTeam;
