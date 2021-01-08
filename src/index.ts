import { layOutDigitalClock, moveDigitalClock } from "./components/layOutDigitalClock";
import { updateDigitalClockText } from "./components/updateDigitalClockText";

setInterval(() => {
  const date = new Date();
  updateDigitalClockText(date);
  layOutDigitalClock();
}, 100);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    layOutDigitalClock();
    moveDigitalClock(-5);
  },
  false,
);
