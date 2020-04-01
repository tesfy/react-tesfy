import React, { FC } from 'react';
import useFeature from './useFeature';

interface Props {
  featureId: string;
  userId?: string;
  attributes?: Record<string, any>;
  children(isFeatureEnabled: boolean): React.ReactNode;
}

const Experiment: FC<Props> = ({ featureId, userId, attributes, children }) => {
  const isFeatureEnabled = useFeature({featureId, userId, attributes });

  return (
    <>
      {children(!!isFeatureEnabled)}
    </>
  );
};

export default Experiment;
