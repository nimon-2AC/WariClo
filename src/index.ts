import { layOutDigitalWatch, moveDigitalWatch } from "./components/layOutDigitalWatch";
import { updateDigitalWatchText } from "./components/updateDigitalWatchText";

setInterval(() => {
  const date = new Date();
  updateDigitalWatchText(date);
  layOutDigitalWatch();
}, 100);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    layOutDigitalWatch();
    moveDigitalWatch(-5);
  },
  false,
);
