const hhmmss: SVGAElement | null = document.querySelector("#hhmmss");
const YYYYMMDD: SVGAElement | null = document.querySelector("#YYYYMMDD");
const WWW: SVGAElement | null = document.querySelector("#WWW");

function alignTextsSpaceBetween(padding: number): void {
  if (!hhmmss || !YYYYMMDD || !WWW) return;

  const hhmmssBBox = hhmmss.getBBox();
  let YYYYMMDDBBox = YYYYMMDD.getBBox();
  YYYYMMDD.setAttribute(
    "y",
    (hhmmssBBox.y + hhmmssBBox.height + YYYYMMDDBBox.height + padding).toString(10),
  );

  YYYYMMDDBBox = YYYYMMDD.getBBox();
  const WWWBBox = WWW.getBBox();
  WWW.setAttribute(
    "y",
    (YYYYMMDDBBox.y + YYYYMMDDBBox.height + WWWBBox.height + padding).toString(10),
  );
}

function moveDigitalWatch(dy: number): void {
  if (!hhmmss || !YYYYMMDD || !WWW) return;

  hhmmss.setAttribute("y", (parseInt(hhmmss.getAttribute("y") || "0", 10) + dy).toString(10));
  YYYYMMDD.setAttribute("y", (parseInt(YYYYMMDD.getAttribute("y") || "0", 10) + dy).toString(10));
  WWW.setAttribute("y", (parseInt(WWW.getAttribute("y") || "0", 10) + dy).toString(10));
}

function layOutDigitalWatch(): void {
  alignTextsSpaceBetween(20);
}

export { layOutDigitalWatch, moveDigitalWatch };
