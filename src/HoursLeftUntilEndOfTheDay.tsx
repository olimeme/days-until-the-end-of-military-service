import React from "react";
import { TimeClock } from "./interfaces/TimeClock";
interface Props {
  timeLeft: TimeClock;
  dayEnded: boolean;
  message: string;
}

const HoursLeftUntilEndOfTheDay = ({ timeLeft, dayEnded, message }: Props) => {
  return (
    <div className="text-center m-auto">
      <p className="text-2xl font-bold">До конца военного дня осталось:</p>
      <br />
      {dayEnded ? (
        <p className="text-xl text-semibold">{message}</p>
      ) : (
        <p className="text-lg text-semibold">
          {timeLeft.hours} часов {timeLeft.minutes} минут {timeLeft.seconds}{" "}
          секунд
        </p>
      )}
    </div>
  );
};

export default HoursLeftUntilEndOfTheDay;
