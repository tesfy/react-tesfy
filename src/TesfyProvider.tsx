import React, { useMemo, useState } from 'react';
import { Engine, Datafile, Storage } from 'tesfy';
import TesfyContext from './TesfyContext';

interface Props {
  datafile?: Datafile;
  storage?: Storage<string>;
  userId?: string;
  attributes?: Record<string, any>;
  children: React.ReactNode;
}

const TesfyProvider = ({
  datafile = {},
  storage,
  userId: userIdProp,
  attributes: attributesProp,
  children
}: Props) => {
  const [userId, setUserId] = useState(userIdProp);
  const [attributes, setAttributes] = useState(attributesProp);

  const value = useMemo(() => {
    const engine = new Engine({ datafile, storage, userId, attributes });

    return {
      engine,
      setUserId,
      setAttributes
    };
  }, [datafile, storage, userId, attributes]);

  return <TesfyContext.Provider value={value}>{children}</TesfyContext.Provider>;
};

export default TesfyProvider;
