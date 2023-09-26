import runGame from '../engine.js';
import getRandom from '../utils.js';
import { MIN_RANDOM, MAX_RANDOM } from '../settings.js';

const questionLine = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const randomNumber = getRandom(MIN_RANDOM, MAX_RANDOM);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGame(questionLine, getQuestionAnswer);
