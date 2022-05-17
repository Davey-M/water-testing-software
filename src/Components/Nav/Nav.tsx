import { Link } from 'react-router-dom';

// style imports
import styles from './Nav.module.css';

function Nav() {
  return (
    <>
      <nav className={styles.container}>
        <Link className={styles.link} to=''>
          Home
        </Link>
        <Link className={styles.link} to='test'>
          Test Water
        </Link>
        <Link className={styles.link} to='chemicals'>
          Chemicals
        </Link>
        <Link className={styles.link} to='profiles'>
          Chemical Profiles
        </Link>
      </nav>
    </>
  );
}

export default Nav;
