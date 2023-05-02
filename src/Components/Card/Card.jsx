import React from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../Chips/Chip';

function Card() {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-lables">
          <Chip text="Frontend" color="green" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="card-title">wassup</div>
      <div className="card-footer">
        <p>
          <Clock />2 May
        </p>
        <p>
          <CheckSquare />
          1/4
        </p>
      </div>
    </div>
  );
}

export default Card;
