import * as readlineSync from 'readline-sync';
import { MAX_COUNT_GAME_ROUNDS } from './settings.js';

const runGame = (questionLine, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(questionLine);

  for (let i = 0; i < MAX_COUNT_GAME_ROUNDS; i += 1) {
    const [question, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
