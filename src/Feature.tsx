import React, { Fragment, FC } from 'react';
import useFeature from './useFeature';

interface Props {
  id: string;
  userId?: string;
  attributes?: Record<string, any>;
  children(isFeatureEnabled: boolean): React.ReactNode;
}

const Experiment: FC<Props> = ({ id, userId, attributes, children }) => {
  const isFeatureEnabled = useFeature({ id, userId, attributes });

  return <Fragment>{children(!!isFeatureEnabled)}</Fragment>;
};

export default Experiment;
