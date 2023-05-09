import { Sidebar } from 'react-feather';
import './Member.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function Members() {
  const name = 'Godden';
  const status = 'admin';
  return (
    <div className="container">
      <Sidebar />

      <div className="member">
        <div className="memberField">
          <h3>{name}</h3>
          <p>Name</p>
        </div>
        <div className="memberField">
          <h3>{status}</h3>
          <p>Status</p>
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
    </div>
  );
}
