import React from "react";
import { Time } from "./interfaces/Time";

interface Props {
  timeLeft: Time;
}

const DaysLeft = ({ timeLeft }: Props) => {
  return (
    <div className="text-center m-auto">
      <p className="text-4xl font-bold">До конца военной практики осталось:</p>
      <br />
      <p className="text-lg text-semibold">
        {timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут{" "}
        {timeLeft.seconds} секунд
      </p>
    </div>
  );
};

export default DaysLeft;
