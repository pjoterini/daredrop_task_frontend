import { useEffect } from 'react';
import StreamerList from './StreamerList.component';
import { useStreamersContext } from '../../context/useStreamersContext';
import { StreamersReducerActionTypes } from '../../context/StreamersContext';

const StreamerListContainer = () => {
  const [streamers, dispatch] = useStreamersContext();

  useEffect(() => {
    const fetchStreamers = async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/streamers`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: StreamersReducerActionTypes.SET_STREAMERS, payload: data });
      }
    };

    fetchStreamers();
  }, [dispatch]);

  return <StreamerList streamers={streamers} />;
};

export default StreamerListContainer;
