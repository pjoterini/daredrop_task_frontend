import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import './App.css';
import { Container } from '@mui/material';
import Streamer from './pages/streamer/streamer';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/streamer/:id" element={<Streamer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
