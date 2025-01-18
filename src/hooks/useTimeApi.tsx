import { useEffect, useState } from "react";

interface TimeData {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

// https://timeapi.io/api/time/current/zone?timeZone=Europe%2FPrague

export const useTimeApi = () => {
  const [timeData, setTimeData] = useState<TimeData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("", {
          headers: {
            accept: "application/json",
          },
        });

        const data = await resp.json();
        setTimeData(data);
      } catch (error) {
        console.log("Time Api Fetching Error:", error);
      }
    };

    getData();

    const intervalId = setInterval(() => {
      setTimeData((prevData) => {
        if (prevData) {
          const updatedTimeData = {
            ...prevData,
            seconds: (prevData.seconds + 1) % 60,
            minute:
              prevData.seconds === 59
                ? (prevData.minute + 1) % 60
                : prevData.minute,
            hour:
              prevData.minute === 59 && prevData.seconds === 59
                ? (prevData.hour + 1) % 24
                : prevData.hour,
          };
          return updatedTimeData;
        }
        return prevData;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return timeData;
};
