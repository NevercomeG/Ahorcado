import React, { useState } from 'react';
import { randomWord } from './words.jsx';
import Image from 'next/image.js';
import step0 from "../../public/assets/img/0.jpg";
import step1 from "../../public/assets/img/1.jpg";
import step2 from "../../public/assets/img/2.jpg";
import step3 from "../../public/assets/img/3.jpg";
import step4 from "../../public/assets/img/4.jpg";
import step5 from "../../public/assets/img/5.jpg";
import step6 from "../../public/assets/img/6.jpg";
import Mycontext from './context.js';
import Idiom from './idiom.jsx';
import { useTranslations } from 'next-intl';

function Hangman(props) {
  const { maxWrong, images } = props;
  
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState(new Set([]));
  const [answer, setAnswer] = useState(randomWord());
  
  const handleGuess = (e) => {
  let letter = e.target.value;
  setGuessed(guessed.add(letter));
  setMistake(mistake + (answer.includes(letter) ? 0 : 1));
  }
  
  const generateButtons = () => {
  return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
  <button
  className='btn btn-lg btn-primary m-2'
  key={letter}
  value={letter}
  onClick={handleGuess}
  disabled={guessed.has(letter) || isWinner}
  >
  {letter}
  </button>
  ));
  }
  
  const guessedWord = () => {
  return answer.split("").map(letter => (guessed.has(letter) ? letter : " _ "));
  }
  
  const resetButton = () => {
  setMistake(0);
  setGuessed(new Set([]));
  setAnswer(randomWord());
  }
  
  const gameOver = mistake >= maxWrong;
  const isWinner = guessedWord().join("") === answer;
  
  let gameStat = generateButtons();
  
  if (isWinner) {
  gameStat = "You Won!!!"
  }
  
  if (gameOver) {
  gameStat = "You Lost!!!"
  }
  
  return (
  <div className="Hangman container">
  <h1 className='text-center'>The Hangman</h1>
  <div className="float-right">Wrong Guesses: {mistake} of {maxWrong}</div>
  <div className="text-center">
  <Image src={images[mistake]} alt=""/>
  </div>
  <div className="text-center">
  <p>Guess the Programming Language:</p>
  <p>
  {!gameOver ? guessedWord() : answer}
  </p>
  <p>{gameStat}</p>
  <h1 className="title">
  </h1>
  <button className='btn btn-info' onClick={resetButton}>Reset</button>
  </div>
  </div>
  )
  }
  
  Hangman.defaultProps = {
  maxWrong: 6,
  images: [step0, step1, step2, step3, step4, step5, step6]
  }
  
  export default Hangman;