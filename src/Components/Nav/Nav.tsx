import { useState } from 'react';
import { Link } from 'react-router-dom';

// style imports
import styles from './Nav.module.css';

function Nav() {
  const [chosen, setChosen] = useState(1);

  const choose = (num: number, chose: number) => {
    if (num === chose) return styles.link + ' ' + styles.chosen;

    return styles.link;
  };

  return (
    <>
      <nav className={styles.container}>
        <Link className={choose(1, chosen)} onClick={(e) => setChosen(1)} to=''>
          Home
        </Link>
        <Link
          className={choose(2, chosen)}
          onClick={(e) => setChosen(2)}
          to='test'
        >
          Test Water
        </Link>
        <Link
          className={choose(3, chosen)}
          onClick={(e) => setChosen(3)}
          to='chemicals'
        >
          Chemicals
        </Link>
        <Link
          className={choose(4, chosen)}
          onClick={(e) => setChosen(4)}
          to='profiles'
        >
          Chemical Profiles
        </Link>
      </nav>
    </>
  );
}

export default Nav;
