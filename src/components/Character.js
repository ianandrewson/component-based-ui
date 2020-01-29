import React, { Component } from 'react';
import styles from './characterList.css';
import PropTypes from 'prop-types';

export default class Character extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }

  render() {
    const { name, status, species, gender, origin, lastLocation, img } = this.props;

    return (
      <>
        <section className={styles.character}>
          <div className={styles.imageHolder}>
            <img src={img} ></img>
            <div className={styles.nameHolder}>
              <p>{name} </p>
            </div>
          </div>
          <div className={styles.textHolder}>
            
            <div className={styles.textLine}> 
              <span>Status</span> <p>{status} </p>
            </div>
            <div className={styles.textLine}> 
              <span>Species</span> <p>{species} </p>
            </div>
            <div className={styles.textLine}> 
              <span>Gender</span> <p>{gender} </p>
            </div>
            <div className={styles.textLine}> 
              <span>Origin</span> <p>{origin} </p>
            </div>
            <div className={styles.textLine}> 
              <span>Last Location</span> <p>{lastLocation} </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
