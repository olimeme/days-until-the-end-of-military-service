import { useEffect, useState } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    setInterval(calculateDaysLeft, 1000);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="text-center m-auto">
        <p className="text-4xl font-bold">
          До конца военной практики осталось:
        </p>
        <br />
        <p className="text-lg text-semibold">
          {timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут{" "}
          {timeLeft.seconds} секунд
        </p>
      </div>
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
