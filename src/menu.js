import * as readlineSync from 'readline-sync';
import runGreeting from './cli.js';
import runEvenGame from './games/even.js';
import runCalcGame from './games/calc.js';
import RunGcdGame from './games/gcd.js';
import runProgressionGame from './games/progression.js';
import runPrimeGame from './games/prime.js';

const choice = (number) => {
  switch (number) {
    case '1':
      runGreeting();
      break;
    case '2':
      runEvenGame();
      break;
    case '3':
      runCalcGame();
      break;
    case '4':
      RunGcdGame();
      break;
    case '5':
      runProgressionGame();
      break;
    case '6':
      runPrimeGame();
      break;
    default:
      break;
  }
};

export default () => {
  console.log('Please enter the game number and press Enter.');
  console.log('1 - Greet\n2 - Even\n3 - Calc\n4 - GCD\n5 - Progression\n6 - Prime\n0 - Exit');
  const number = readlineSync.question('Your choice: ');
  console.log('');
  choice(number);
};
