import { PropsWithChildren } from 'react';

import styles from './Header.module.css';

interface props {
  color?: 'main' | 'secondary';
}

function Header(props: PropsWithChildren<props>) {
  let color = styles.main;

  if (props.color === 'secondary') {
    color = styles.secondary;
  }

  return (
    <>
      <div className={`${styles.header} ${color}`}>
        <h1>{props.children}</h1>
      </div>
    </>
  );
}

export default Header;
