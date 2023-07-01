import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button, Stack, Typography } from '@mui/material';

interface IProps {
  voteStatus: number | undefined;
}

const VoteSection = ({ voteStatus }: IProps) => {
  return (
    <Stack direction="row" alignItems="center">
      <Button size="small" variant="outlined">
        <ThumbUpIcon />
      </Button>
      <Typography variant="h5" px={2}>
        {voteStatus}
      </Typography>
      <Button size="small" variant="outlined">
        <ThumbDownIcon />
      </Button>
    </Stack>
  );
};

export default VoteSection;
