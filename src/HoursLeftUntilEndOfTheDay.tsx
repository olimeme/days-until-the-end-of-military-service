import React from "react";
import { TimeClock } from "./interfaces/TimeClock";
interface Props {
  timeLeft: TimeClock;
  dayEnded: boolean;
}

const HoursLeftUntilEndOfTheDay = ({ timeLeft, dayEnded }: Props) => {
  return (
    <div className="text-center m-auto">
      <p className="text-2xl font-bold">До конца военного дня осталось:</p>
      <br />
      {dayEnded ? (
        <p className="text-xl text-semibold">Военный день окончен!</p>
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
