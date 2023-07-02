import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IStreamer } from '../../context/StreamersContext';
import VoteSection from '../VoteSection/VoteSection';

interface IProps {
  streamer?: IStreamer;
}

const StreamerRecord = ({ streamer }: IProps) => {
  return (
    <Container maxWidth="sm" sx={{ pt: 2 }}>
      <Card sx={{ minWidth: 280 }}>
        {streamer && (
          <CardContent>
            <Stack pb={2} gap={1} direction="column" justifyContent="space-between">
              <Avatar
                alt="Streamer avatar"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
                sx={{ width: 100, height: 100 }}
              />
              <Box sx={{ display: 'flex', mt: 2 }}>
                <Typography minWidth={150} variant="h5">
                  Name:
                </Typography>
                <Typography pl={2} variant="h5" color="secondary" textTransform="uppercase">
                  {streamer.name}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography minWidth={150} variant="h5">
                  Description:
                </Typography>
                <Typography pl={2} variant="h5" color="secondary" textTransform="uppercase">
                  {streamer.description}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', pb: 1 }}>
                <Typography minWidth={150} variant="h5">
                  Platform:
                </Typography>
                <Typography pl={2} variant="h5" color="secondary" textTransform="uppercase">
                  {streamer.platform}
                </Typography>
              </Box>
            </Stack>
            <VoteSection voteStatus={streamer.voteStatus} streamerId={streamer._id} />
          </CardContent>
        )}
        <CardActions>
          <Link to={'/'}>
            <Button sx={{ mb: 1, ml: 1 }} color="secondary" variant="contained" size="medium">
              return
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default StreamerRecord;
