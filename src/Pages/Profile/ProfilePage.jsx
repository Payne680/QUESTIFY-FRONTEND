import React from 'react';
import Input from '../../Components/Atoms/Inputs/Input';
import Button from '../../Components/Atoms/Buttons/Button';
import './ProfilePage.css';

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="leftSide">
        {/* <h1 className="head">My Profile</h1> */}
        <h2 className="head">Personal Information</h2>
        <form>
          <p className="text">UserName</p>
          <Input className="Input1" name="username" type="text" />
          <p className="text">Email Address</p>
          <Input className="Input1" name="email" type="email" />
          <p className="text">Password</p>
          <Input className="Input1" name="password" type="password" />
          <Button className="btn" title="Edit User Infos" />
        </form>
      </div>
      <div className="rightSide">
        <h2 className="head">Member Registration</h2>
        <div className="profileInfos">
          <div className="register">
            <h2 className="head">You are registered</h2>
            <p>You registered on Monday, 7 November 2022 at 10:57:05 GMT+1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
