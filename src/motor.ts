import { puntuationBound, setPuntuationBound } from "./modelo";
import { commentHandler, gameOver, paintCard, showPuntuation } from "./ui";

export const getRandomNum = (): number => Math.floor(Math.random() * 10) + 1;

export const addTwo = (num: number): number => (num > 7 ? num + 2 : num);

export const getValueHandler = (points: number): number => {
  if (points > 7) {
    return (points = 0.5);
  } else {
    return points;
  }
};

export const getCardImage = (puntuacion?: string): string => {
  switch (puntuacion) {
    case "0":
      return "assets/img/back.jpg";
    case "1":
      return "assets/img/1_as-copas.jpg";
    case "2":
      return "assets/img/2_dos-copas.jpg";
    case "3":
      return "assets/img/3_tres-copas.jpg";
    case "4":
      return "assets/img/4_cuatro-copas.jpg";
    case "5":
      return "assets/img/5_cinco-copas.jpg";
    case "6":
      return "assets/img/6_seis-copas.jpg";
    case "7":
      return "assets/img/7_siete-copas.jpg";
    case "10":
      return "assets/img/10_sota-copas.jpg";
    case "11":
      return "assets/img/11_caballo-copas.jpg";
    case "12":
      return "assets/img/12_rey-copas.jpg";
    default:
      return "assets/img/back.jpg";
  }
};

export const gameHandler = (puntuation: number): string => {
  if (puntuation > 0 && puntuation < 4) {
    return "Has sido muy conservador";
  }

  if (puntuation >= 4 && puntuation < 6) {
    return "Te ha entrado el canguelo eh";
  }

  if (puntuation >= 6 && puntuation <= 7) {
    return "Casi casi...";
  }

  if (puntuation === 7.5) {
    return "¡HAS GANADO!";
  }

  if (puntuation > 7.5) {
    return "Te has pasado...";
  }

  return "";
};

export const puntuationBoundHandler = (newNumber: number): number => {
  const updatedPuntuationBound = puntuationBound + newNumber;
  setPuntuationBound(updatedPuntuationBound);
  return updatedPuntuationBound;
};

export const hitMeHandler = () => {
  const randomNum: number = getRandomNum();
  const cartNumb: number = addTwo(randomNum);
  const value: number = getValueHandler(cartNumb);
  puntuationBoundHandler(value);
  showPuntuation(puntuationBound);
  gameOver(puntuationBound);
  paintCard(cartNumb.toString());
};

export const standHandler = () => {
  let comentario = gameHandler(puntuationBound)
  commentHandler(comentario)
};

export const resetHandler = () => {
  setPuntuationBound(0);
  showPuntuation(puntuationBound);
  gameOver(0);
  paintCard("0");
  let comentario = gameHandler(0);
  commentHandler(comentario)
}
