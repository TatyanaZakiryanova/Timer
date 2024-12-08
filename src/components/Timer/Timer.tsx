import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState<number>(0);
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
        setMilliseconds((prev) => prev + 10);
      }, 10);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setMilliseconds(0);
    setIsRunning(false);
  };

  const totalSeconds = Math.floor(milliseconds / 1000);
  const remainingMilliseconds = milliseconds % 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div>
      <Typography
        component="h2"
        sx={{
          fontSize: '26px',
          fontWeight: 'bold',
          color: '#469ce3',
        }}
        gutterBottom
      >
        {`${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(
          Math.floor(remainingMilliseconds / 10),
        ).padStart(2, '0')}`}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
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
