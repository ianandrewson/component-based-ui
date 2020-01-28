import React, { Component } from 'react';
import characterStyle from './Character.css';
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
        <section>
          <p>Name: {name} </p>
          <p>Status: {status} </p>
          <p>Species: {species} </p>
          <p>Gender: {gender} </p>
          <p>Origin: {origin} </p>
          <p>Last Location: {lastLocation} </p>
          <img href={img} ></img>
        </section>
      </>
    );
  }
}
