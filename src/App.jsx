import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Templates/Pages/Signin';
import Signup from './Templates/Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
