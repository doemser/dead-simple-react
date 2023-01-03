export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor() {
  return `hsl(${getRandomIntInclusive(180, 360)},50%,50%)`;
}
