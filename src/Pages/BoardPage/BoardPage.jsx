/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import './BoardPage.css';
import Board from '../../Components/Board/Board';
import Heading from '../../Components/Atoms/Headings/Heading';
import Editable from '../../Components/Editable/Editable';
import { getColumns, saveColumns } from '../../Api/auth';

function BoardPage() {
  const [boards, setBoards] = useState([
    {
      id: Date.now(),
      title: 'TODO',
      cards: [],
    },
  ]);
  const [target, setTarget] = useState({
    cid: '',
    bid: '',
  });

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    getColumns().then(setColumns);
    console.log(columns);
  }, []);

  const addCard = (title, bid) => {
    const card = {
      title,
      /*       lables: '',
      date: '',
      desc: '', */
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0);
    let tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
    saveColumns(boards);
    tempBoards[index].length = 0;
    const empty = tempBoards[index].length;
    setBoards(empty);
    console.log(empty);
  };

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0);

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0);

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        title,
        cards: [],
      },
    ]);
  };

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => item.id !== bid);

    setBoards(tempBoards);
  };

  const handleDragEnd = (cid, bid) => {
    let s_bIndex;
    let s_cIndex;
    let t_bIndex;
    let t_cIndex;

    s_bIndex = boards.findIndex((item) => item.id === bid);
    if (s_bIndex < 0)
      s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
    if (s_cIndex < 0)
      t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (t_bIndex < 0)
      t_cIndex = boards[t_bIndex].cards?.findIndex(
        (item) => item.id === target.cid
      );
    if (t_cIndex < 0);

    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex];

    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);

    setBoards(tempBoards);
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  return (
    <div className="board-page">
      <div className="board-page-navbar">
        <Heading title="Questify" size="40px" color="White" />
      </div>
      <div className="board-page-outer">
        <div className="board-page-boards">
          {columns?.map((item, i) => (
            <Board
              key={i}
              board={item}
              removeBoard={removeBoard}
              addCard={addCard}
              removeCard={removeCard}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))}
          <div className="board-page-column">
            <Editable
              displayClass="board-page-column-add"
              text="New Column"
              placeholder="Enter column title"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardPage;
