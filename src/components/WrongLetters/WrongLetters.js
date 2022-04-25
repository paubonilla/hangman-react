import React from 'react'
import { WrongLettersContainer } from '../../styled'

function WrongLetters({ wrongLetters }) {
  return (
    <WrongLettersContainer>
      <div>
        {wrongLetters.length > 0 && <p>I swear if you press this letters again! </p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </WrongLettersContainer>
  )
}

export default WrongLetters
