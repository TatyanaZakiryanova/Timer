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
          backgroundColor: '#f0f0f0',
        }}
      >
        <Card
          sx={{
            width: 350,
            padding: 2,
            boxShadow: 2,
            borderRadius: '20px',
            textAlign: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h4" component="h1" sx={{ color: 'primary.main' }} gutterBottom>
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
