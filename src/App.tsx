import { useEffect, useState } from "react";
import DaysLeft from "./DaysLeft";
import HoursLeftUntilEndOfTheDay from "./HoursLeftUntilEndOfTheDay";
import { Time } from "./interfaces/Time";
import { TimeClock } from "./interfaces/TimeClock";

function App() {
  const [timeLeft, setTimeLeft] = useState<Time>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [endOfDayTimeLeft, setEndOfDayTimeLeft] = useState<TimeClock>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [dayEnded, setDayEnded] = useState<boolean>(false);

  const calculateDaysLeft = () => {
    const firstDate: any = Date.now();
    const secondDate: any = new Date("May 6, 2023");

    let seconds = Math.floor((secondDate - firstDate) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    setTimeLeft({ days, hours, minutes, seconds });
  };

  const calculateEndOfDayHoursLeft = () => {
    const firstDate: any = new Date();
    const currentDay = firstDate.getDate();
    const currentMonth = firstDate.getMonth();
    const secondDate: any = new Date(2023, currentMonth, currentDay, 17, 0, 0);

    if (secondDate < firstDate) {
      setDayEnded(true);
      return;
    }

    let seconds = Math.floor((secondDate - firstDate) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    setEndOfDayTimeLeft({ hours, minutes, seconds });
  };

  useEffect(() => {
    calculateDaysLeft();
    calculateEndOfDayHoursLeft();

    setInterval(() => {
      calculateDaysLeft();
      calculateEndOfDayHoursLeft();
    }, 1000);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <DaysLeft timeLeft={timeLeft} />
      <HoursLeftUntilEndOfTheDay
        timeLeft={endOfDayTimeLeft}
        dayEnded={dayEnded}
      />
      <div className="mx-auto">
        <p className="text-md">
          {" "}
          <a
            href="https://github.com/olimeme/days-until-the-end-of-military-service"
            target="_blank"
            className="hover:text-red-500 hover:ease-in-out duration-300"
          >
            Сделано с ненавистью ❤️
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
