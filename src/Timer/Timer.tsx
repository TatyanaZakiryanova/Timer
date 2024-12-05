import { Box, Button, Typography } from '@mui/material';
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

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <Typography component="h2" sx={{ fontSize: '22px', color: '#404040' }} gutterBottom>
        {`${String(minutes).padStart(2, '0')} : ${String(remainingSeconds).padStart(2, '0')}`}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
        <Button
          variant={isRunning ? 'outlined' : 'contained'}
          color="primary"
          onClick={toggleTimer}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          variant="contained"
          color={isRunning ? 'error' : 'primary'}
          onClick={resetTimer}
          disabled={!isRunning}
        >
          Reset
        </Button>
      </Box>
    </div>
  );
};

export default Timer;
