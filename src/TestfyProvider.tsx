import React, { useMemo, useState } from 'react';
import { Engine, Datafile, Storage } from 'testfy';
import TestfyContext from './TestfyContext';

interface Props {
  datafile?: Datafile;
  storage?: Storage<string>;
  userId?: string;
  attributes?: Record<string, any>;
  children: React.ReactNode;
}

const TestfyProvider = ({
  datafile = {},
  storage,
  userId: userIdProp,
  attributes: attributesProp,
  children
}: Props) => {
  const [userId, setUserId] = useState(userIdProp);
  const [attributes, setAttributes] = useState(attributesProp);

  const value = useMemo(() => {
    const engine = new Engine(datafile, storage, userId, attributes);

    return {
      engine,
      setUserId,
      setAttributes
    };
  }, [datafile, storage, userId, attributes]);

  return <TestfyContext.Provider value={value}>{children}</TestfyContext.Provider>;
};

export default TestfyProvider;
