import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Templates/Signup';
import Signin from './Pages/Templates/Signin';
import CreateFirstTeam from './Pages/Templates/CreateFirstTeam';
import Landing from './Pages/Landing/Homepage';
import Dashboard from './Pages/Dashboard/Dashboard';
import BoardPage from './Pages/BoardPage/BoardPage';
import ProfilePage from './Pages/Templates/profile/ProfilePage';
import DataTable from './Pages/Templates/userList/UserList';
import List from './Pages/List/List';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="create-first-team" element={<CreateFirstTeam />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="board" element={<BoardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="members" element={<DataTable />} />
            <Route path="list" element={<List />} />
          </Route>
          <Route path="login" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
