import runGame from '../engine.js';
import getRandom from '../utils.js';
import { MIN_RANDOM, MAX_RANDOM } from '../settings.js';

const questionLine = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const randomNumber = getRandom(MIN_RANDOM, MAX_RANDOM);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGame(questionLine, getQuestionAnswer);
