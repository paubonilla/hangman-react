import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Figure from './components/Figure/Figure';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Word from './components/Word/Word';
import Notification from './components/Notification/Notification';
import Popup from './components/Popup/Popup';
import { showNotification as show } from './helpers'
import './App.css';
import { AppContainer, AppInner, GameContainer } from './styled';

const words = [
  'babu',
  'application',
  'bamboozle',
  'interface',
  'pangit',
  'programming',
  'prototype',
  'supercalifragilisticexpialidocious',
  'syzygy',
  'wizard',
  'zenzizenzizenzic'
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <AppContainer>
      <AppInner>
        <Header />
        <GameContainer>
          <Figure
            wrongLetters={wrongLetters}
          />
          <WrongLetters
            wrongLetters={wrongLetters}
          />
          <Word
            selectedWord={selectedWord}
            correctLetters={correctLetters}
          />
        </GameContainer>
        <Notification
          showNotification={showNotification}
        />
        <Popup
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          selectedWord={selectedWord}
          setPlayable={setPlayable}
          playAgain={playAgain}
        />
      </AppInner>
    </AppContainer>
  );
}

export default App;
