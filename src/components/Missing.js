import { Link } from 'react-router-dom';
import styles from 'styles/Missing.module.scss';

export const Missing = () => {
  return (
    <main className={styles.missing}>
      <h2>Page Not Found</h2>
      <p>
        <Link to="/blog-app">Go to Homepage</Link>
      </p>
    </main>
  );
};
