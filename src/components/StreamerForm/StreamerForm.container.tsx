import StreamerForm from './StreamerForm.component';

export enum Platform {
  twitch = 'twitch',
  youtube = 'youtube',
  tiktok = 'tiktok',
  kick = 'kick',
  rumble = 'rumble',
}
export interface StreamerFormProps {
  name: string;
  description: string;
  platform: Platform;
}

const StreamerFormContainer = () => {
  const onSubmit = async (values: StreamerFormProps) => {
    const response = await fetch('http://localhost:4000/streamers', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  };

  return <StreamerForm onSubmit={onSubmit} />;
};

export default StreamerFormContainer;
