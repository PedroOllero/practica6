import { puntuationBound,setPuntuationBound } from "./modelo";

export const puntuationBoundHandler = (newNumber: number): number => {
  const updatedPuntuationBound = puntuationBound + newNumber;
  setPuntuationBound(updatedPuntuationBound);
  return updatedPuntuationBound;
};

export const gameHandler = (puntuation: number) => {
  if (puntuation < 4) {
    console.log("Has sido muy conservador");
  } else if (puntuation >= 5 && puntuation <= 7.5) {
    switch (puntuation) {
      case 5:
        console.log("Te ha entrado el canguelo eh");
        break;
      case 6:
        console.log("Casi casi...");
        break;
      case 7:
        console.log("Casi casi...");
        break;
      case 7.5:
        console.log("¡Lo has clavado! ¡Enhorabuena!");
        break;
    }
  }
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
