import Timer from './Timer';
import { Box, Card, CardContent, Typography } from '@mui/material';

const App = () => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            width: 300,
            padding: 2,
            boxShadow: 5,
            borderRadius: '20px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
          }}
        >
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Timer
            </Typography>
            <Timer />
          </CardContent>
        </Card>
      </Box>
    </Typography>
  );
};

export default App;
