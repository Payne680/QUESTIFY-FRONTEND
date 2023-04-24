import React from 'react';
import './Attribute.css';
import Button from '../../Atoms/Buttons/Button';
import Tags from '../../Atoms/Tags/Tag';

export default function Attribute() {
  return (
    <div className="attributes">
      <Tags />
      <Button title="Sign up free" />
    </div>
  );
}
