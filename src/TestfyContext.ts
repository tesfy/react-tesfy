// @flow

import { createContext } from 'react';
import Testfy from 'testfy';

export interface Context {
  instance?: Testfy,
  userId?: string,
  attributes?: Record<string, any>
};

const TestfyContext = createContext<Context>({});

export default TestfyContext;
