import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IStreamer, StreamersReducerActionTypes } from '../../context/StreamersContext';
import { useStreamersContext } from '../../context/useStreamersContext';
import StreamerDetails from './StreamerDetails.component';

const StreamerRecordContainer = () => {
  const [streamers, dispatch] = useStreamersContext();
  const [streamer, setStreamer] = useState<IStreamer | undefined>();
  const params = useParams();
  const streamerId = params.id;

  useEffect(() => {
    if (streamers.length === 0) {
      const fetchStreamer = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/streamers/${streamerId}`);
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: StreamersReducerActionTypes.SET_STREAMER, payload: data });
          setStreamer(() => data);
        }
      };
      fetchStreamer();
    } else {
      setStreamer(() => streamers.find((streamer) => streamer._id === streamerId));
    }
  }, [dispatch]);

  return <StreamerDetails streamer={streamer} />;
};

export default StreamerRecordContainer;
