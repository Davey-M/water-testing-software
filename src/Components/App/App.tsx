import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// component imports
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

import WaterTest from '../WaterTest/WaterTest';
import ChemicalProfiles from '../ChemicalProfiles/ChemicalProfiles';
import Chemicals from '../Chemicals/Chemicals';

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='test' element={<WaterTest />} />
          <Route path='chemicals' element={<Chemicals />} />
          <Route path='profiles' element={<ChemicalProfiles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
