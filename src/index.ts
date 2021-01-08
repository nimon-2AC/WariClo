import { layOutDigitalClock, moveDigitalClock } from "./components/layOutDigitalClock";
import { updateClock } from "./components/updateClock";
import { updateDigitalClockText } from "./components/updateDigitalClockText";

setInterval(() => {
  const date = new Date();
  updateDigitalClockText(date);
  layOutDigitalClock();
  updateClock(date);
}, 100);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    layOutDigitalClock();
    moveDigitalClock(-5);
  },
  false,
);
