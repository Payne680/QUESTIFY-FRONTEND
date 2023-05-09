import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Templates/Signup';
import Signin from './Pages/Templates/Signin';
import CreateFirstTeam from './Pages/Templates/CreateFirstTeam';
import Landing from './Pages/Landing/Homepage';
import Dashboard from './Pages/Dashboard/Dashboard';
import BoardPage from './Pages/BoardPage/BoardPage';
import PageLoader from './Pages/Templates/PageLoader/PageLoader';
import Members from './Pages/Members/Members';
import ProfilePage from './Pages/Profile/ProfilePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="loader" element={<PageLoader />} />
          <Route path="create-first-team" element={<CreateFirstTeam />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="board" element={<BoardPage />} />
            <Route path="members" element={<Members />} />
          </Route>
          <Route path="login" element={<Signin />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
