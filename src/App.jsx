import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './Pages/Landing/Homepage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
