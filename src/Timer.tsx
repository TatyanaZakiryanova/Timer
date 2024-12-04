import { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const toggleTimer = () => {
    if (isRunning) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    } else {
      const id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <div>{seconds}</div>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
