import styles from 'styles/Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <span>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </span>
    </header>
  );
};
