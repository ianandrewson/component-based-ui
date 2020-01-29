import React, { Component } from 'react';
import Character from './Character.js';
import characters from '../characters.js';
import styles from './CharacterList.css';

export default class CharacterList extends Component {
  render(){
    return (
      <article className={styles.characterList}>
        {characters.map(character => {
          return <Character key={character.name} {...character} />;
        })}
      </article>
    );
  }
}
