function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
export default getRandomNumber;
