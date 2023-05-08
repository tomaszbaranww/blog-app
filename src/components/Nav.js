import { Link } from 'react-router-dom';
import styles from 'styles/Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/blog-app">Home</Link>
        </li>
        <li>
          <Link to="/blog-app/post"> Add Post</Link>
        </li>
      </ul>
    </nav>
  );
};
