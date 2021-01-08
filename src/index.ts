import { updateDigitalWatchText } from "./components/updateDigitalWatchText";

setInterval(() => {
  const date = new Date();
  updateDigitalWatchText(date);
}, 100);
