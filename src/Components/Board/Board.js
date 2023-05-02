import React from 'react';
import { MoreHorizontal } from 'react-feather';
import './Board.css';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';

function Board() {
  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">
          To Do <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board-cards">
        <Card />
        <Card />
        <Card />
        <Editable
          displayClass="board-cards-add"
          text="Add Card"
          placeholder="Enter Card Title"
        />
      </div>
    </div>
  );
}

export default Board;
