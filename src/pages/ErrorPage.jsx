import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorTitle}>Error 404: Page Not Found</h1>
      <p className={styles.errorMessage}>Sorry, the page you're looking for doesn't exist.</p>
      <img src="https://i.imgur.com/6xv8K.gif" alt="Error Gif" className={styles.errorGif} />
      <button onClick={() => window.history.back()} className={styles.goBackButton}>Go Back</button>
      <button onClick={() => window.location.href = '/'} className={styles.goHomeButton}>Go Home</button>
    </div>
  );
};

export default ErrorPage;