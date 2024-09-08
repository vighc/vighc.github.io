// components/Header.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header id="header">
      <h1>Vighneshwara C</h1>
      <p>Data Engineer | Python | SQL | GCP | AWS</p>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '☾' : '☀︎'}
      </button>
    </header>
  );
};

export default Header;
