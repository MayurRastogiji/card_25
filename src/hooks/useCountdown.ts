import { useState, useEffect } from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function useCountdown(targetIsoDate: string): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => calculateTimeLeft(targetIsoDate));

  function calculateTimeLeft(target: string): CountdownTime {
    // Parse target date (e.g. 2026-11-26T19:00:00+05:30)
    const targetTimestamp = new Date(target).getTime();
    const nowTimestamp = new Date().getTime();
    const difference = targetTimestamp - nowTimestamp;

    if (difference <= 0 || isNaN(difference)) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isComplete: false,
    };
  }

  useEffect(() => {
    // Immediate calculation
    setTimeLeft(calculateTimeLeft(targetIsoDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetIsoDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoDate]);

  return timeLeft;
}
