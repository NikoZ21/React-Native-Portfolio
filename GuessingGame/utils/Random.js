export default function Random(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return Random(min, max, exclude);
  } else {
    return rndNum;
  }
}
