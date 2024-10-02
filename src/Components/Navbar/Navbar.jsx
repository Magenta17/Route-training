import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      // Logout logic here
      // Redirect to logout page
      window.location.href = '/logout';
    } else {
      // Login logic here
      // Redirect to login page
      window.location.href = '/login';
    }
    setIsLoggedIn(!isLoggedIn);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={styles.navbar}>
      <ul>
      <li className={styles.logoContainer}>
          <Link to="/">
            <img src="src\assets\ecwl.png" alt="Logo" className={styles.logo} />
          </Link>
        </li>
        <li><Link to="/home" activeClassName={styles.active}>Home</Link></li>
        <li><Link to="/about" activeClassName={styles.active}>About</Link></li>
        <li><Link to="/contact" activeClassName={styles.active}>Contact</Link></li>
      </ul>
      <div className={styles.loginContainer}>
        <span className={styles.darkModeToggle} onClick={handleDarkModeToggle}>
          {isDarkMode ? '🌞' : '🌚'}
        </span>
        <button
          className={`${styles.loginButton} ${isLoggedIn ? styles.logoutButton : styles.loginButtonGreen}`}
          onClick={handleLoginClick}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;