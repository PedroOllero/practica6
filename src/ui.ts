import { getCardImage, hitMeHandler, resetHandler, standHandler } from "./motor";

export const paintCard = (puntuacion?: string): void => {
  const cardImage = getCardImage(puntuacion);
  const card = document.getElementById("carta");
  if (card && card instanceof HTMLImageElement) {
    card.src = cardImage;
  }
};

export const commentTransition = (activo: boolean) => {
  const comment = document.querySelector(".comentario");
  if (comment && comment instanceof HTMLParagraphElement) {
    if (activo) {
      comment.classList.add("active");
    } else {
      comment.classList.remove("active");
    }
  }
};

export const commentHandler = (texto: string) => {
  const comment = document.querySelector(".comentario");
  if (comment && comment instanceof HTMLParagraphElement) {
    if(texto === ""){
      commentTransition(false);
    }else{
      commentTransition(true);
    comment.textContent = texto;
    }
  }
}

export const hitMeButtonHandler = () => {
  const hitMeButton = document.getElementById("pedir");
  if (hitMeButton && hitMeButton instanceof HTMLButtonElement) {
    hitMeButton.addEventListener("click", () => {
      hitMeHandler();
    });
  }
};

export const standButtonHandler = () => {
  const standButton = document.getElementById("plantar");
  if (standButton && standButton instanceof HTMLButtonElement) {
    standButton.addEventListener("click", () => {
      standHandler();
    });
  }
};

export const resetButtonHandler = () => {
  let resetButton = document.getElementById("reset");
  if (resetButton && resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", () => {
      resetHandler();
    });
  }
};

export const showPuntuation = (impressPuntuation: number) => {
  let impressPuntuationString: string = impressPuntuation.toString();

  let showPuntuationScreen = document.getElementById("puntuacion__numero");

  if (showPuntuationScreen && showPuntuationScreen instanceof HTMLElement) {
    showPuntuationScreen.textContent = impressPuntuationString;
  }
};

export const gameOver = (puntuacion: number) => {
  const gameOverScreen = document.querySelector(".gameover")!;
  if (
    gameOverScreen &&
    gameOverScreen instanceof HTMLParagraphElement &&
    puntuacion > 7.5
  ) {
    gameOverScreen.classList.add("active");
  } else {
    gameOverScreen.classList.remove("active");
  }
};