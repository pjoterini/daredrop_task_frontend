import React, { createContext, useReducer } from 'react';

export enum StreamersReducerActionTypes {
  SET_STREAMERS = 'set streamers',
  SET_STREAMER = 'set streamer',
  CREATE_STREAMER = 'create streamer',
  DEFAULT = 'default',
}

export interface IStreamer {
  _id: string;
  name: string;
  description: string;
  platform: string;
  voteStatus: number;
}

interface StreamersState {
  streamers: IStreamer[];
}

type ReducerAction = {
  type: StreamersReducerActionTypes;
  payload: IStreamer[];
};

interface IProps {
  children: React.ReactNode;
}

const initialState: StreamersState = {
  streamers: [],
};

export const StreamersContext = createContext<[IStreamer[], React.Dispatch<ReducerAction>]>([
  initialState.streamers,
  () => ({ type: StreamersReducerActionTypes.DEFAULT }),
]);

const streamersReducer = (state: StreamersState, action: ReducerAction): StreamersState => {
  switch (action.type) {
    case StreamersReducerActionTypes.SET_STREAMERS:
      return {
        streamers: action.payload,
      };
    case StreamersReducerActionTypes.SET_STREAMER:
      return {
        streamers: action.payload,
      };
    case StreamersReducerActionTypes.CREATE_STREAMER:
      return {
        streamers: [...action.payload, ...state.streamers],
      };
    default:
      return state;
  }
};

export const StreamersContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(streamersReducer, initialState);

  return <StreamersContext.Provider value={[state.streamers, dispatch]}>{children}</StreamersContext.Provider>;
};
