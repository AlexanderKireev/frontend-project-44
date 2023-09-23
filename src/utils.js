const minLimitRandom = 1;
const maxLimitRandom = 100;
const maxCountGameRounds = 3;

const getRandom = () => Math.floor(Math.random() * (maxLimitRandom - minLimitRandom + 1));

export { maxCountGameRounds, getRandom };
