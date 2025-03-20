import { puntuationBound,setPuntuationBound } from "./modelo";

export const puntuationBoundHandler = (newNumber: number): number => {
  const updatedPuntuationBound = puntuationBound + newNumber;
  setPuntuationBound(updatedPuntuationBound);
  return updatedPuntuationBound;
};

export const getRandomNum = (): number => {
  const randomNumLocal = Math.floor(Math.random() * 10 + 1);
  if (randomNumLocal > 7) {
    return randomNumLocal + 2;
  }
  return randomNumLocal;
};

export const getValueHandler = (points: number): number => {
  if (points > 7) {
    return (points = 0.5);
  } else {
    return points;
  }
};
