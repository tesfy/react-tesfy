import { useContext } from 'react';
import TesfyContext from './TesfyContext';

export const useTesfy = () => {
  const context = useContext(TesfyContext);
  return context;
};

export default useTesfy;
