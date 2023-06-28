import { IStreamer } from '../StreamerList.container';

interface IProps {
  streamer: IStreamer | null;
}

const StreamerCard = ({ streamer }: IProps) => {
  return <>{streamer?.name}</>;
};

export default StreamerCard;
