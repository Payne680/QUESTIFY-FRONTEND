import './Member.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Button from '../../Components/Atoms/Buttons/Button';
/* import AuthGuard from '../../Components/services/AuthGuard';
 */
function Members() {
  const name = 'Godden';
  const status = 'admin';
  return (
    <div className="memberContainer">
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
      <Button title="Add member" />
    </div>
  );
}

export default Members;
