import React, { useMemo, useState } from 'react';
import Testfy from 'testfy';
import { Datafile } from 'testfy/dist/types/Config';
import Storage from 'testfy/dist/types/Storage';
import TestfyContext from './TestfyContext';

interface Props {
  datafile: Datafile;
  storage?: Storage<string>;
  userId?: string;
  attributes?: Record<string, any>;
  children: React.ReactNode;
};

const TestfyProvider = ({
  datafile,
  storage,
  userId: userIdProp,
  attributes: attributesProp,
  children
}: Props) => {
  const [userId, setUserId] = useState(userIdProp);
  const [attributes, setAttributes] = useState(attributesProp);

  const value = useMemo(() => {
    const testfy = new Testfy(datafile, storage, userId, attributes);

    return {
      instance: testfy,
      setUserId,
      setAttributes
    };
  }, [datafile, storage, userId, attributes]);

  return (
    <TestfyContext.Provider value={value}>
      {children}
    </TestfyContext.Provider>
  )
};

export default TestfyProvider;
