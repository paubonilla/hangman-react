import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`

export const AppInner = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const GameContainer = styled.div`
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 350px;
  width: 450px;
`

export const FigureContainer = styled.svg`
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
`

export const WrongLettersContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  p {
    margin: 0 0 5px;
  }
  span {
    font-size: 24px;
  }
`

export const WordContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const Letter = styled.span`
  border-bottom: 3px solid #2980b9;
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
`

export const PopupContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;
`

export const PopupMessage = styled.div`
  background: #2980b9;
  border-radius: 5px;
  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  button {
    cursor: pointer;
    background-color: #fff;
    color: #2980b9;
    border: 0;
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;
  }
  button:active {
    transform: scale(0.98);
  }
  button:focus {
    outline: 0;
  }
`

export const NotificationContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  position: absolute;
  bottom: -50px;
  transition: transform 0.3s ease-in-out;
  p {
   margin: 0;
  }
`