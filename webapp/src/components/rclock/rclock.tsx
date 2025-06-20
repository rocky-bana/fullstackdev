import React, { useState, useEffect } from 'react';

const RClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime: string = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formattedDate: string = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const gmtOffset = (): string => {
    const offset: number = time.getTimezoneOffset(); // in minutes
    const absOffset = Math.abs(offset);
    const hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
    const minutes = String(absOffset % 60).padStart(2, '0');
    const sign = offset <= 0 ? '+' : '-';
    return `GMT${sign}${hours}:${minutes}`;
  };

  const timeZoneName: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white animate-fadeIn px-4 text-center">
      <h1 className="text-6xl font-mono mb-2 text-red-400">{formattedTime}</h1>
      <p className="text-2xl mb-1 text-teal-300">{formattedDate}</p>
      <p className="text-lg text-green-400"> 
        {gmtOffset()} | {timeZoneName}
      </p>
      <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-600 text-transparent bg-clip-text text-center mb-4">
  Clock Of BHARAT
</p>

    </div>
  );
};

export default RClock;
