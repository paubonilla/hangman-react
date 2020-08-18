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
    const sadComments = [
      "I feel bad for your brain cells",
      "You got this! There is more time to give up",
      "What are you 12?",
      "I don't know what to say...",
      "The FBI looking at you right now, just quit his job",
      "Don't overthink if you're not using it right"
    ];
    finalMessage = sadComments[Math.floor(Math.random() * sadComments.length)];
    const lastSadComments = [
      "even a 9 year old can win this.",
      "what's wrong with you, I'm just concern.",
      "or just close this APPLICATION",
      "and yes that is a word!"
    ];
    finalMessageRevealWord = `The word was "${selectedWord}", ` + lastSadComments[Math.floor(Math.random() * lastSadComments.length)];
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
