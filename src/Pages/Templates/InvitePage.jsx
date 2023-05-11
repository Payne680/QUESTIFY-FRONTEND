import React from 'react';
import Button from '../../Components/Atoms/Buttons/Button';
import Footerdesign from './Footerdesign';
import './Styles.css';

export default function InvitePage() {
  return (
    <div className="invite">
      <h1>Welcome User</h1>
      <h2>You have been invited to join Project workspace</h2>
      <p>Click the link to accept the invite</p>
      <Button title="Accept" />
      <Footerdesign />
    </div>
  );
}
