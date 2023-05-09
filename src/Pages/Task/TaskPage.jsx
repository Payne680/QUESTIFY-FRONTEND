import React from 'react';
import './TaskPage.css';

export default function TaskPage() {
  return (
    <div className="taskPage">
      <table>
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
            </div>
          </th>
          <th>Assignee</th>
          <th>Due date</th>
          <th>Priority</th>
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
      </table>
    </div>
  );
}
