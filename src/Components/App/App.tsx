import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// component imports
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<h1>About</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
