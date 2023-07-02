import { StreamersContext } from './StreamersContext';
import { useContext } from 'react';

export const useStreamersContext = () => {
  const context = useContext(StreamersContext);

  if (!context) {
    throw Error('useStreamersContext must be used inside StreamersContextProvider');
  }

  return context;
};
