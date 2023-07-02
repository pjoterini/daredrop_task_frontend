import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button, Stack, Typography } from '@mui/material';
import { StreamersReducerActionTypes } from '../../context/StreamersContext';
import { useStreamersContext } from '../../context/useStreamersContext';
import { hasNotVotedBefore, hasVotedDifferent, hasVotedSame } from './votingValidation';

interface IProps {
  voteStatus: number | undefined;
  streamerId: string;
}

const VoteSection = ({ voteStatus, streamerId }: IProps) => {
  const [, dispatch] = useStreamersContext();

  const voteStreamer = async (value: { vote: boolean }) => {
    const stringValue = value.vote.toString();

    if (hasVotedSame(streamerId, stringValue)) return;
    hasNotVotedBefore(streamerId, stringValue);

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/streamers/${streamerId}/vote`, {
      method: 'PATCH',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: StreamersReducerActionTypes.VOTE_STREAMER, payload: [data] });
      hasVotedDifferent(streamerId, stringValue);
    } else {
      console.error('something went wrong');
    }
  };

  return (
    <Stack direction="row" alignItems="center">
      <Button onClick={() => voteStreamer({ vote: true })} size="small" variant="outlined">
        <ThumbUpIcon />
      </Button>
      <Typography variant="h5" px={2}>
        {voteStatus}
      </Typography>
      <Button onClick={() => voteStreamer({ vote: false })} size="small" variant="outlined">
        <ThumbDownIcon />
      </Button>
    </Stack>
  );
};

export default VoteSection;
