import React from 'react'
import { WordContainer, Letter } from '../styled'

function Word({ selectedWord, correctLetters }) {
  return (
    <WordContainer className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <Letter className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </Letter>
        )
      })}
    </WordContainer>
  )
}

export default Word
