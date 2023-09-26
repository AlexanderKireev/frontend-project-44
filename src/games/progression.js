import runGame from '../engine.js';
import getRandom from '../utils.js';
import * as setup from '../settings.js';

const questionLine = 'What number is missing in the progression?';

const generateProgression = (step, length, first) => {
  const sequence = [];
  for (let element = first; sequence.length < length; element += step) {
    sequence.push(element);
  }
  return sequence;
};

const getQuestionAnswer = () => {
  const progressionLength = getRandom(setup.MIN_PROGRESSION_LENGTH, setup.MAX_PROGRESSION_LENGTH);
  const firstStep = getRandom(setup.MIN_PROGRESSION_FIRST_NUM, setup.MAX_PROGRESSION_FIRST_NUM);
  let progressionStep = 0;
  do {
    progressionStep = getRandom(setup.MIN_PROGRESSION_STEP, setup.MAX_PROGRESSION_STEP);
  } while (progressionStep === 0);
  const sequence = generateProgression(progressionStep, progressionLength, firstStep);
  const missingElementIndex = getRandom(0, sequence.length - 1);
  const correctAnswer = String(sequence[missingElementIndex]);
  sequence[missingElementIndex] = '..';
  return [sequence.join(' '), correctAnswer];
};

export default () => runGame(questionLine, getQuestionAnswer);
