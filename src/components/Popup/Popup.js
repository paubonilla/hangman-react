import React, { useEffect } from 'react'
import { checkResult } from '../../helpers'
import { PopupContainer, PopupMessage } from '../../styled'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkResult(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Nice, you win, oh well...';
    playable = false;
  } else if (checkResult(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'I feel bad for your brain cells';
    finalMessageRevealWord = `The word was "${selectedWord}", even a 9 year old can win this`;
    playable = false
  }

  useEffect(() => setPlayable(playable));

  return (
    <PopupContainer style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <PopupMessage>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button
          onClick={playAgain}
        >Play Again</button>
      </PopupMessage>
    </PopupContainer>
  )
}

export default Popup
