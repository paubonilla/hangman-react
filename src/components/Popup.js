import React, { useEffect } from 'react'
import { checkResult } from '../helpers'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkResult(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'You win duh';
    playable = false;
  } else if (checkResult(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You lost';
    finalMessageRevealWord = `... the word was: ${selectedWord}`;
    playable = false
  }

  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
