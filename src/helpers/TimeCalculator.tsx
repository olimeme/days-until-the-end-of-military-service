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
    const now: Date = new Date();
    const targetDate: Date = new Date(year, month, day, hour, minute, second);
    return this.calculateTimeBetween(now, targetDate);
  }

  public static isWeekend(dayOfWeek: number) {
    return [6, 7].findIndex((day) => day === dayOfWeek) !== -1;
  }

  public static precentComplete(overallDay: number) {
    const now: any = new Date();
    const startDate: any = new Date(2023, 1, 28);
    const { days: daysPassed } = this.calculateTimeBetween(startDate, now);
    return Math.floor((daysPassed / overallDay) * 100);
  }

  public static calculateTimeBetween(startDate: Date, endDate: Date) {
    let seconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    return { seconds, minutes, hours, days };
  }
}
