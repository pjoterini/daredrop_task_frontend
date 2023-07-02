import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography pb={2} variant="h3" color="primary">
        Page not found
      </Typography>
      <Typography variant="h4" color="secondary">
        <Link to="/">Go to Homepage</Link>
      </Typography>
    </Container>
  );
};

export default ErrorPage;
