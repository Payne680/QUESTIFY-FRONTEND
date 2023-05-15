import React, { useEffect, useState } from 'react';
import './TaskPage.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { getColumns } from '../../Api/auth';

export default function TaskPage() {
  const [task, setTask] = useState();
  useEffect(() => {
    getColumns().then(setTask);
  }, []);
  console.log(task);

  return (
    <div className="taskPage scroll">
      {task?.map((item) => {
        return (
          <div className="carding" key={item.id}>
            {item.cards?.map((tasks) => {
              return (
                <div className="taskContain">
                  <div className="taskbox">
                    <h3>Task</h3>
                    <p>{tasks.title}</p>
                  </div>
                  <div className="taskbox">
                    <h3>Assignee</h3>
                    <p>assignee</p>
                  </div>
                  <div className="taskbox">
                    <h3>Due date</h3>
                    <p>dueDate</p>
                  </div>
                  <div className="taskbox">
                    <h3>Priority</h3>
                    <p>priority</p>
                  </div>
                  <div className="memberFieldBtn">
                    <button type="button" className="manageElt">
                      <FaEdit />
                    </button>
                    <hr />
                    <button type="button" className="manageElt">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
