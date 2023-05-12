import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Templates/Signup';
import Signin from './Pages/Templates/Signin';
import CreateFirstTeam from './Pages/Templates/CreateFirstTeam';
import Landing from './Pages/Landing/Homepage';
import Dashboard from './Pages/Dashboard/Dashboard';
import BoardPage from './Pages/BoardPage/BoardPage';
import PageLoader from './Pages/Templates/PageLoader/PageLoader';
import Page404 from './Pages/Page404/Page404';
import ProfilePage from './Pages/Profile/ProfilePage';
import Members from './Pages/Members/Members';
import TaskPage from './Pages/Task/TaskPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Signin />} />
          <Route path="loader" element={<PageLoader />} />
          <Route path="create-first-team" element={<CreateFirstTeam />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="members" element={<Members />} />
            <Route path="list" element={<TaskPage />} />
          </Route>
          <Route path="login" element={<Signin />} />
          <Route path="404-page" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
