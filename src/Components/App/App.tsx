import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to=''>Home</Link>
        <Link to='about'>About</Link>
      </nav>
      <div>
        <Routes>
          <Route path='' element={<h1>Hello World</h1>} />
          <Route path='about' element={<h1>About</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
