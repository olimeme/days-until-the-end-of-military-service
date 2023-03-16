interface DateParams {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  second?: number;
}

export class TimeCalculator {
  public static calculateFromNow(
    year: number,
    month: number,
    day: number,
    hour = 0,
    minute = 0,
    second = 0
  ) {
    const now: any = new Date();
    const targetDate: any = new Date(year, month, day, hour, minute, second);
    console.log(targetDate);

    let seconds = Math.floor((targetDate - now) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    return { seconds, minutes, hours, days };
  }

  public static isWeekend(dayOfWeek: number) {
    return [6, 7].findIndex((day) => day === dayOfWeek) !== -1;
  }

  public static precentComplete(overallDay: number) {
    // 67 дней в общем
    const now: any = new Date();
    const startDate: any = new Date(2023, 1, 28);
    console.log(startDate);

    let seconds = Math.floor((now - startDate) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let daysPassed = Math.floor(hours / 24);

    // вернуть в процентах пройденное количество
    return Math.floor((daysPassed / overallDay) * 100);
  }
}
