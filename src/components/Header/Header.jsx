import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>📝 Task Manager </h1>
      <p className={styles.subtitle}>Organize your day efficiently</p>
    </header>
  );
};

export default Header;
