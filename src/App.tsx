import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import DaysLeft from "./DaysLeft";
import { TimeCalculator } from "./helpers/TimeCalculator";
import HoursLeftUntilEndOfTheDay from "./HoursLeftUntilEndOfTheDay";
import { Time } from "./interfaces/Time";
import { TimeClock } from "./interfaces/TimeClock";
const OVERALL_LENGTH_IN_DAYS = 67;
function App() {
  const [message, setMessage] = useState<string>("");
  const [dayEnded, setDayEnded] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);
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

  const calculateDaysLeft = () => {
    const { days, hours, minutes, seconds } = TimeCalculator.calculateFromNow(
      2023,
      4,
      6
    ); //6th of May
    setTimeLeft({ days, hours, minutes, seconds });
  };

  const calculateEndOfDayHoursLeft = () => {
    const firstDate: any = new Date();
    const currentDay = firstDate.getDate();
    const currentMonth = firstDate.getMonth();
    const secondDate: any = new Date(2023, currentMonth, currentDay, 17, 0, 0);

    if (TimeCalculator.isWeekend(firstDate.getDay())) {
      setMessage("Сегодня выходной!");
      setDayEnded(true);
      return;
    }

    if (secondDate < firstDate) {
      setMessage("Военный день окончен!");
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

  const everyCalculation = () => {
    calculateDaysLeft();
    calculateEndOfDayHoursLeft();
    setProgressValue(TimeCalculator.precentComplete(OVERALL_LENGTH_IN_DAYS));
  };

  useEffect(() => {
    everyCalculation();
    setInterval(() => everyCalculation(), 1000);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <DaysLeft timeLeft={timeLeft} />
      <ProgressBar value={progressValue} />
      <HoursLeftUntilEndOfTheDay
        timeLeft={endOfDayTimeLeft}
        dayEnded={dayEnded}
        message={message}
      />

      <div className="mx-auto">
        {" "}
        <a
          href="https://github.com/olimeme/days-until-the-end-of-military-service"
          target="_blank"
          className="text-md hover:text-red-500 hover:ease-in-out duration-300"
        >
          Сделано с любовью ❤️
        </a>{" "}
      </div>
    </div>
  );
}

export default App;
