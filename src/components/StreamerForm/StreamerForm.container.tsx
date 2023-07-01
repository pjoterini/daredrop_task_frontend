import { StreamersReducerActionTypes } from '../../context/StreamersContext';
import { useStreamersContext } from '../../context/useStreamersContext';
import StreamerForm from './StreamerForm.component';
import type { FormikState } from 'formik/dist/types';

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
  const [, dispatch] = useStreamersContext();

  const onSubmit = async (
    values: StreamerFormProps,
    resetForm: (
      nextState?:
        | Partial<
            FormikState<{
              name: string;
              description: string;
              platform: Platform;
            }>
          >
        | undefined,
    ) => void,
  ) => {
    const response = await fetch('http://localhost:4000/streamers', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      resetForm();
      dispatch({ type: StreamersReducerActionTypes.CREATE_STREAMER, payload: [data] });
    } else {
      console.error('something went wrong');
    }
  };

  return <StreamerForm onSubmit={onSubmit} />;
};

export default StreamerFormContainer;
