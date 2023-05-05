import React from 'react';
import './ProfilePage.css';
import Input from '../../../Components/Atoms/Inputs/Input';
import Button from '../../../Components/Atoms/Buttons/Button';

export default function profilePage() {
  return (
    <div className="editProfile">
      <form className="leftSide">
        <h1 className="head">My Profil</h1>
        <h2>Personal Information</h2>
        <h3>Username</h3>
        <div className="editInput">
          <Input className="inputs" type="text" />
          <h3>Email Address</h3>
        </div>
        <Input className="inputs" type="email" />
        <h3>Password</h3>
        <Input className="inputs" type="password" />
        <Button
          className="bttn"
          title="Edit Account"
        />
      </form>
      <div className="rightSide">
        <h2>Members Registration</h2>
        <div className="inputField">
          <div className="editText">
            <h2>You are registered</h2>
            <p>
              You registered on Wednesday, 14 Febuary 2023 at 12:00:30 GMT+1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
