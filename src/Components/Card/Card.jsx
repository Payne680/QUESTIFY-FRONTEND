/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../Chips/Chip';
import Dropdown from '../Dropdown/Dropdown';

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
      onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
    >
      <div className="card-top">
        <div className="card-top-lables">
          {props.card?.lables.map((item) => (
            <Chip key={item.id} text={item.text} color={item.color} />
          ))}
        </div>
        <div
          className="card-top-more"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="card-dropdown">
                <p
                  onClick={() =>
                    props.removeCard(props.card?.id, props.boardId)
                  }
                >
                  Delete task
                </p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="card-title">{props.card?.title}</div>
      <div className="card-footer">
        {props.card?.date && (
          <p>
            <Clock />
            {props.card?.date}
          </p>
        )}
        <p>
          <CheckSquare />
          1/4
        </p>
      </div>
    </div>
  );
}

export default Card;
