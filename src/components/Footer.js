import styles from 'styles/Footer.module.scss';

export const Footer = () => {
  const today = new Date();
  return (
    <footer className={styles.footer}>
      <p>tomaszbaranww, Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};
