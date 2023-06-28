import StreamerCard from './StreamerCard/StreamerCard';
import { IStreamer } from './StreamerList.container';

interface IProps {
  streamers: IStreamer[] | null;
}

const StreamerList = ({ streamers }: IProps) => {
  return (
    <>
      {streamers?.map((streamer) => (
        <StreamerCard streamer={streamer} key={streamer._id} />
      ))}
    </>
  );
};

export default StreamerList;
