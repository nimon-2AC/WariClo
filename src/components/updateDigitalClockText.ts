const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");
const YYYY = document.getElementById("YYYY");
const MM = document.getElementById("MM");
const DD = document.getElementById("DD");
const WWW = document.getElementById("WWW");

function toStringWithZeroPadding(n: number, stringLength: number) {
  const nStr = n.toString(10);
  if (nStr.length >= stringLength) return nStr;
  return ("0".repeat(stringLength) + nStr).slice(-stringLength);
}

function toDayString(dayOfTheWeek: number) {
  const dayStringTable: ReadonlyArray<string> = ["日", "月", "火", "水", "木", "金", "土"];
  return dayStringTable[dayOfTheWeek];
}

function updateDigitalClockText(date: Date): void {
  if (hh) hh.innerHTML = toStringWithZeroPadding(date.getHours(), 2);
  if (mm) mm.innerHTML = toStringWithZeroPadding(date.getMinutes(), 2);
  if (ss) ss.innerHTML = toStringWithZeroPadding(date.getSeconds(), 2);

  if (YYYY) YYYY.innerHTML = toStringWithZeroPadding(date.getFullYear(), 4);
  if (MM) MM.innerHTML = toStringWithZeroPadding(date.getMonth() + 1, 2);
  if (DD) DD.innerHTML = toStringWithZeroPadding(date.getDate(), 2);

  if (WWW) WWW.innerHTML = `（${toDayString(date.getDay())}）`;
}

export { updateDigitalClockText };
