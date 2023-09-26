import runGame from '../engine.js';
import getRandom from '../utils.js';
import { MIN_RANDOM, MAX_RANDOM } from '../settings.js';

const questionLine = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

const getQuestionAnswer = () => {
  const firstOperand = getRandom(MIN_RANDOM, MAX_RANDOM);
  const secondOperand = getRandom(MIN_RANDOM, MAX_RANDOM);
  const correctAnswer = String(getGcd(firstOperand, secondOperand));
  const mathExpression = `${firstOperand} ${secondOperand}`;
  return [mathExpression, correctAnswer];
};

export default () => runGame(questionLine, getQuestionAnswer);
