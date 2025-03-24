import { hitMeButtonHandler, resetButtonHandler, standButtonHandler } from "./ui";

const buttonsHandler = () => {
  hitMeButtonHandler();
  standButtonHandler();
  resetButtonHandler();
};

document.addEventListener("DOMContentLoaded", () => {
  buttonsHandler();
});
