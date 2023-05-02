import React from 'react';
import './BoardPage.css';
import Board from '../../Components/Board/Board';
import Heading from '../../Components/Atoms/Headings/Heading';

function BoardPage() {
  return (
    <div className="board-page">
      <div className="board-page-navbar">
        <Heading title="Questify" size="40px" color="White" />
      </div>
      <div className="board-page-outer">
        <div className="board-page-boards">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default BoardPage;
