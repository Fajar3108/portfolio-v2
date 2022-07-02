import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages';

function App() {
  return (
    <Router>
      <div className='mx-auto container px-10 md:px-0'>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
