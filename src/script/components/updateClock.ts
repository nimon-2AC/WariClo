const monthDonut: SVGAElement | null = document.querySelector("#month-foreground");
const dateDonut: SVGAElement | null = document.querySelector("#date-foreground");
const hourDonut: SVGAElement | null = document.querySelector("#hour-foreground");
const minuteDonut: SVGAElement | null = document.querySelector("#minute-foreground");
const secondDonut: SVGAElement | null = document.querySelector("#second-foreground");

function arcPath(radius: number, percentage: number): string {
  const largeArcFlag = percentage > 0.5 ? 1 : 0;
  const x = -radius * Math.cos(2 * Math.PI * percentage + Math.PI / 2);
  const y = -radius * Math.sin(2 * Math.PI * percentage + Math.PI / 2);
  return `M 0 0
            L 0 -${radius}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}
            Z`;
}

function updateMonthDonut(currentMonth_ms: number, year_ms: number): void {
  if (!monthDonut) return;
  const percentage = currentMonth_ms / year_ms;
  monthDonut.setAttribute("d", arcPath(300, percentage));
}

function updateDateDonut(currentDate_ms: number, month_ms: number): void {
  if (!dateDonut) return;
  const percentage = currentDate_ms / month_ms;
  dateDonut.setAttribute("d", arcPath(275, percentage));
}

function updateHourDonut(currentHour_ms: number, date_ms: number): void {
  if (!hourDonut) return;
  const percentage = currentHour_ms / date_ms;
  hourDonut.setAttribute("d", arcPath(250, percentage));
}

function updateMinuteDonut(currentMinute_ms: number, hour_ms: number): void {
  if (!minuteDonut) return;
  const percentage = currentMinute_ms / hour_ms;
  minuteDonut.setAttribute("d", arcPath(225, percentage));
}

function updateSecondDonut(currentSecond_ms: number, minute_ms: number): void {
  if (!secondDonut) return;
  const percentage = currentSecond_ms / minute_ms;
  secondDonut.setAttribute("d", arcPath(200, percentage));
}

function updateClock(date: Date): void {
  const currentMinute = date.getMinutes();
  const currentHour = date.getHours();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  // 1 年は year_ms ミリ秒
  const year_ms = new Date(currentYear + 1, 0).getTime() - new Date(currentYear, 0).getTime();
  // 1 月は month_ms ミリ秒
  const month_ms =
    new Date(currentYear, currentMonth + 1).getTime() -
    new Date(currentYear, currentMonth).getTime();
  // 1 日は date_ms ミリ秒
  const date_ms =
    new Date(currentYear, currentMonth, currentDate + 1).getTime() -
    new Date(currentYear, currentMonth, currentDate).getTime();
  // 1 時間は hour_ms ミリ秒
  const hour_ms =
    new Date(currentYear, currentMonth, currentDate, currentHour + 1).getTime() -
    new Date(currentYear, currentMonth, currentDate, currentHour).getTime();
  // 1 分は minute_ms ミリ秒
  const minute_ms =
    new Date(currentYear, currentMonth, currentDate, currentHour, currentMinute + 1).getTime() -
    new Date(currentYear, currentMonth, currentDate, currentHour, currentMinute).getTime();

  updateMonthDonut(date.getTime() - new Date(currentYear, 0).getTime(), year_ms);
  updateDateDonut(date.getTime() - new Date(currentYear, currentMonth).getTime(), month_ms);
  updateHourDonut(
    date.getTime() - new Date(currentYear, currentMonth, currentDate).getTime(),
    date_ms,
  );
  updateMinuteDonut(
    date.getTime() - new Date(currentYear, currentMonth, currentDate, currentHour).getTime(),
    hour_ms,
  );
  updateSecondDonut(
    date.getTime() -
      new Date(currentYear, currentMonth, currentDate, currentHour, currentMinute).getTime(),
    minute_ms,
  );
}

export { updateClock };
