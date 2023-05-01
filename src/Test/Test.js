/* eslint-disable no-unused-vars */
import Board, {
  moveBoard,
  moveColumn,
  removeCard,
  addCard,
} from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { RxContainer } from 'react-icons/rx';
import useBoard from '../Components/store/Board';

function BoardPach() {
  const { board, setBoard } = useBoard();

  return (
    <div className="board-container">
      <span>Questify board</span>
      <Board>{board}</Board>
    </div>
  );
}
export default BoardPach;
