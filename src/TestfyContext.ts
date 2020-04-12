// @flow

import { createContext } from 'react';
import { Engine } from 'testfy';

export interface Context {
  engine?: Engine,
  userId?: string,
  attributes?: Record<string, any>
};

const TestfyContext = createContext<Context>({});

export default TestfyContext;
