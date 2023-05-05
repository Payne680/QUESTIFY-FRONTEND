import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Templates/Signup';
import Signin from './Pages/Templates/Signin';
import CreateFirstTeam from './Pages/Templates/CreateFirstTeam';
import Landing from './Pages/Landing/Homepage';
import List from './Pages/List/List';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="create-first-team" element={<CreateFirstTeam />} />
          <Route path="login" element={<Signin />} />
          <Route path="list" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
