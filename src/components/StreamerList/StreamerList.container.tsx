import { useEffect, useState } from 'react';
import StreamerList from './StreamerList.component';

export interface IStreamer {
  _id: string;
  name: string;
  description: string;
  platform: string;
  voteStatus: number;
}

const StreamerListContainer = () => {
  const [streamers, setStreamers] = useState<IStreamer[] | null>(null);

  useEffect(() => {
    const fetchStreamers = async () => {
      const response = await fetch('http://localhost:4000/streamers');
      const data = await response.json();

      if (response.ok) {
        setStreamers(data);
      }
    };

    fetchStreamers();
  }, []);

  return <StreamerList streamers={streamers} />;
};

export default StreamerListContainer;
