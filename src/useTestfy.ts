import { useContext } from 'react';
import TestfyContext from './TestfyContext';

export const useTestfy = () => {
  const context = useContext(TestfyContext);
  return context;
};

export default useTestfy;
