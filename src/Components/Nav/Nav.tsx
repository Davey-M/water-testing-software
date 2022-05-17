import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <Link to=''>Home</Link>
        <Link to='test'>Test Water</Link>
        <Link to='chemicals'>Chemicals</Link>
        <Link to='profiles'>Chemical Profiles</Link>
      </nav>
    </>
  );
}

export default Nav;
