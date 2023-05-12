/* eslint-disable  */
import React, { useState } from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Dropdown from '../Dropdown/Dropdown';
import Cardinfo from './Cardinfo/Cardinfo';
import geek from './geekman.png.png';

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Cardinfo card={props.card} onClose={() => setShowModal(false)} />
      )}
      <div
        className="card"
        draggable
        onDragEnd={(ev) =>
          props.handleDragEnd(props.card?.id, props.boardIndex, ev)
        }
        onDragEnter={() =>
          props.handleDragEnter(props.card?.id, props.boardIndex)
        }
        onClick={() => setShowModal(true)}
      >
        <div className="card-top">
          <div className="card-top-avatar">
            <img alt="avatar" src={geek} />
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
                      props.removeCard(props.card?.id, props.boardIndex)
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
    </>
  );
}

export default Card;
