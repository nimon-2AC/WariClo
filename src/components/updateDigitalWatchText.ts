const hhmmss = document.getElementById("hh:mm:ss");
const YYYYMMDD = document.getElementById("YYYY-MM-DD");
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

function updateDigitalWatchText(date: Date): void {
  const hh = toStringWithZeroPadding(date.getHours(), 2);
  const mm = toStringWithZeroPadding(date.getMinutes(), 2);
  const ss = toStringWithZeroPadding(date.getSeconds(), 2);
  if (hhmmss) hhmmss.innerHTML = `${hh}:${mm}:${ss}`;

  const YYYY = toStringWithZeroPadding(date.getFullYear(), 4);
  const MM = toStringWithZeroPadding(date.getMonth() + 1, 2);
  const DD = toStringWithZeroPadding(date.getDate(), 2);
  if (YYYYMMDD) YYYYMMDD.innerHTML = `${YYYY}-${MM}-${DD}`;

  if (WWW) WWW.innerHTML = `（${toDayString(date.getDay())}）`;
}

export { updateDigitalWatchText };
