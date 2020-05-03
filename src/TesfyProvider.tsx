import React, { useMemo, useState } from 'react';
import { Engine } from 'tesfy';
import TesfyContext from './TesfyContext';

interface Props {
  engine: Engine;
  children: React.ReactNode;
}

export const createInstance = (props: ConstructorParameters<typeof Engine>[0]) => {
  return new Engine(props);
};

const TesfyProvider = ({
  engine,
  children
}: Props) => {
  const [userId, setUserId] = useState(engine.getUserId());
  const [attributes, setAttributes] = useState(engine.getAttributes());

  const handleUserIdChange = (userId: string) => {
    engine.setUserId(userId);
    setUserId(userId);
  }

  const handleAttributesChange = (attributes: Record<string, any>) => {
    engine.setAttributes(attributes);
    setAttributes(attributes);
  }

  const value = useMemo(() => {
    return {
      engine,
      setUserId: handleUserIdChange,
      setAttributes: handleAttributesChange
    };
  }, [engine, userId, attributes]);

  return <TesfyContext.Provider value={value}>{children}</TesfyContext.Provider>;
};

export default TesfyProvider;
