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

export const useTimeApi = () => {
  const [timeData, setTimeData] = useState<TimeData | null>(null);

  useEffect(() => {
    const timeDataUrl = import.meta.env.VITE_TIMEDATA_API_URL;

    const getData = async () => {
      try {
        const resp = await fetch(timeDataUrl, {
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
  }, []);

  return timeData;
};
