import { Button, Card, CardActions, CardContent, Typography, Stack } from '@mui/material';
import VoteSection from '../../VoteSection/VoteSection';
import { IStreamer } from 'context/StreamersContext';
import { Link } from 'react-router-dom';
interface IProps {
  streamer: IStreamer;
}

const StreamerCard = ({ streamer }: IProps) => {
  return (
    <Card sx={{ minWidth: 280 }}>
      <CardContent sx={{ display: 'flex', justifyContect: 'space-between' }}>
        <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="div">
            {streamer.name}
          </Typography>
          <VoteSection voteStatus={streamer.voteStatus} streamerId={streamer._id} />
        </Stack>
      </CardContent>
      <CardActions>
        <Link to={`/streamer/${streamer._id}`}>
          <Button sx={{ mx: 'auto', mb: 1, ml: 1 }} color="secondary" variant="contained" size="medium">
            check details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default StreamerCard;
