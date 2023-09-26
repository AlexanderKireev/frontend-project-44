import runGame from '../engine.js';
import getRandom from '../utils.js';
import { MIN_CALCULATOR_OPERAND, MAX_CALCULATOR_OPERAND } from '../settings.js';

const questionLine = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCalculation = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Error! Unknown operator: '${operator}'!`);
  }
};

const getQuestionAnswer = () => {
  const firstOperand = getRandom(MIN_CALCULATOR_OPERAND, MAX_CALCULATOR_OPERAND);
  const secondOperand = getRandom(MIN_CALCULATOR_OPERAND, MAX_CALCULATOR_OPERAND);
  const operator = operators[getRandom(0, operators.length - 1)];
  const correctAnswer = String(getCalculation(firstOperand, secondOperand, operator));
  const mathExpression = `${firstOperand} ${operator} ${secondOperand}`;
  return [mathExpression, correctAnswer];
};

export default () => runGame(questionLine, getQuestionAnswer);
