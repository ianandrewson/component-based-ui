import React from 'react';
import styles from './App.css';
import Header from './Header.js';

const Footer = () => (
  <footer className={styles.Footer}>
    <section className={styles.stats}>
      <p>Characters: 493</p>
      <p>Locations: 76</p>
      <p>Episodes: 31</p>
    </section>
    <section className={styles.acknowledgment}>
      <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
    </section>
  </footer>
);

const App = () => (
  <React.Fragment>
    <Header />
    <Footer />
  </React.Fragment>
);

export default App;
