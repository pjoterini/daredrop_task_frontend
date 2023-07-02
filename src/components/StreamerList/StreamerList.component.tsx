import { Grid, Typography, Box } from '@mui/material';
import StreamerCard from './StreamerCard/StreamerCard';
import { IStreamer } from 'context/StreamersContext';

interface IProps {
  streamers: IStreamer[];
}

const StreamerList = ({ streamers }: IProps) => {
  return (
    <Box pb={4}>
      <Box maxWidth={1000} mx="auto" pt={6} pb={2}>
        <Typography px={1} variant="h5" component="h1">
          Streamers List
        </Typography>
      </Box>
      <Grid width="100%" maxWidth={1000} container mx="auto">
        {streamers.map((streamer) => (
          <Grid xs={8} md={6} lg={4} p={1} item key={streamer._id} mx={0}>
            <StreamerCard streamer={streamer} key={streamer._id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StreamerList;
