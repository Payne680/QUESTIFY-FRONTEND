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
          <h3>Due date</h3>
          <p>{dueDate}</p>
        </div>
        <div className="taskbox">
          <h3>Priority</h3>
          <p>{priority}</p>
        </div>
        <div className="taskBoxIcon">
          <span className="material-symbols-outlined">edit_note</span>
          <span className="material-symbols-outlined">delete</span>
        </div>
      </div>
    </div>
  );
}
