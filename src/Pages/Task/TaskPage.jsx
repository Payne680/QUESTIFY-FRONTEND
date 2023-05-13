import React from 'react';
import './TaskPage.css';

export default function TaskPage() {
  const task = 'Design home page';
  const assignee = 'Mesmer';
  const dueDate = 'Jully 11 2024';
  const priority = 'High';
  return (
    <div className="taskPage">
      <div className="taskContain">
        <div className="taskbox">
          <h3>Task</h3>
          <p>{task}</p>
        </div>
        <div className="taskbox">
          <h3>Assignee</h3>
          <p>{assignee}</p>
        </div>
        <div className="taskbox">
          <h3>Task</h3>
          <p>{dueDate}</p>
        </div>
        <div className="taskbox">
          <h3>Task</h3>
          <p>{priority}</p>
        </div>
        <div className="taskBoxIco">
          <span className="material-symbols-outlined">delete</span>
          <span className="material-symbols-outlined">edit_note</span>
        </div>
      </div>
      {/* <table>
        <tr>
          <th className="First">
            <div className="infos">
              <input
                className="box"
                type="checkbox"
                // name="select"
                // id="selectAll"
              />
              Task{' '}
              <span className="material-symbols-outlined">arrow_upward</span>
              <span className="material-symbols-outlined" id="more">
                more_horiz
              </span>
            </div>
          </th>
          <th>
            <div className="infos">
              Assignee{' '}
              <span className="material-symbols-outlined">arrow_upward</span>
              <span className="material-symbols-outlined" id="horiz">
                more_horiz
              </span>
            </div>
          </th>
          <th>
            <div className="infos">
              Due date{' '}
              <span className="material-symbols-outlined">arrow_upward</span>
              <span className="material-symbols-outlined" id="horiz">
                more_horiz
              </span>
            </div>
          </th>
          <th>
            <div className="infos">
              Priority{' '}
              <span className="material-symbols-outlined">arrow_upward</span>
              <span className="material-symbols-outlined" id="horizon">
                more_horiz
              </span>
            </div>
          </th>
        </tr>
      </table> */}
    </div>
  );
}
