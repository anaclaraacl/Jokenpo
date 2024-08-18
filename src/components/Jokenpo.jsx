import React, { useState } from 'react';
import './Jokenpo.css';
import pedraImg from '../images/pedra.png';
import papelImg from '../images/papel.png';
import tesouraImg from '../images/tesoura.png';

const Jokenpo = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const choices = ['Pedra', 'Papel', 'Tesoura'];
  const images = {
    Pedra: pedraImg,
    Papel: papelImg,
    Tesoura: tesouraImg,
  };

  const playGame = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult('Vish, empatou :(');
      setDraws(draws + 1);
    } else if (
      (choice === 'Pedra' && computerChoice === 'Tesoura') ||
      (choice === 'Papel' && computerChoice === 'Pedra') ||
      (choice === 'Tesoura' && computerChoice === 'Papel')
    ) {
      setResult('Uhuul, você venceu :)');
      setPlayerWins(playerWins + 1);
    } else {
      setResult('Ah, o computador venceu :(');
      setComputerWins(computerWins + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setPlayerWins(0);
    setComputerWins(0);
    setDraws(0);
  };

  return (
    <div className="container">
      <h1>JOKENPÔ</h1>
      <div className="choices">
        <button className="choice-button" onClick={() => playGame('Pedra')}>
          <img src={pedraImg} alt="Pedra" />
        </button>
        <button className="choice-button" onClick={() => playGame('Papel')}>
          <img src={papelImg} alt="Papel" />
        </button>
        <button className="choice-button" onClick={() => playGame('Tesoura')}>
          <img src={tesouraImg} alt="Tesoura" />
        </button>
      </div>
      <div className="scoreboard">
        <div className="score">User: {playerWins}</div>
        <div className="score">Computer: {computerWins}</div>
        <div className="score">Empates: {draws}</div>
      </div>
      {playerChoice && (
        <div className="result-container">
          <div className="choice-display">
            <p>User</p>
            <img src={images[playerChoice]} alt={playerChoice} />
          </div>
          <p className="result">{result}</p>
          <div className="choice-display">
            <p>Computer</p>
            <img src={images[computerChoice]} alt={computerChoice} />
          </div>
        </div>
      )}
      <button onClick={resetGame}>JOGAR NOVAMENTE!</button>
    </div>
  );
};

export default Jokenpo;
