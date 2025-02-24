import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    {
      id: 'filters',
      label: 'Search Filters',
      items: ['All Results', 'Images', 'Videos', 'News', 'Shopping']
    },
    {
      id: 'time',
      label: 'Time Range',
      items: ['Any time', 'Past hour', 'Past 24 hours', 'Past week', 'Past month']
    },
    {
      id: 'settings',
      label: 'Settings',
      items: ['SafeSearch', 'Language', 'Region', 'Advanced Search', 'Search History']
    }
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.content} half-page`}>

        {/* Search Box Container */}
        <div className={styles.searchBox}>
          <input type="text" className={styles.searchInput} placeholder="Search keyword..." />
          <div className={styles.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Buttons Container */}
        <div className={styles.buttonContainer}>
          {buttons.map((button) => (
            <div key={button.id} className={styles.buttonWrapper} onMouseEnter={() => setHoveredButton(button.id)} onMouseLeave={() => setHoveredButton(null)}>
              <button className={styles.dropdownButton}>{button.label}</button>
              <div className={`${styles.dropdown} ${hoveredButton === button.id ? styles.show : ''}`}>
                {button.items.map((item, index) => (
                  <div key={index} className={styles.dropdownItem}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;