// @flow

import { createContext } from 'react';
import { Engine } from 'tesfy';

export interface Context {
  engine?: Engine;
  userId?: string;
  attributes?: Record<string, any>;
}

const TesfyContext = createContext<Context>({});

export default TesfyContext;
