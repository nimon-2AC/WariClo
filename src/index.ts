import "./style/index.scss";
import "./static/CNAME";
import "./static/BingSiteAuth.xml";
import "./static/sitemap.xml";

import { layOutDigitalClock, moveDigitalClock } from "./components/layOutDigitalClock";
import { updateClock } from "./components/updateClock";
import { updateDigitalClockText } from "./components/updateDigitalClockText";

function animate(): void {
  const date = new Date();
  updateDigitalClockText(date);
  layOutDigitalClock();
  updateClock(date);

  requestAnimationFrame(animate);
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    layOutDigitalClock();
    moveDigitalClock(-5);
    animate();
  },
  false,
);
