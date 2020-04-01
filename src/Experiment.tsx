import React, { FC } from 'react';
import useExperiment from './useExperiment';

interface Props {
  id: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const Experiment: FC<Props> = ({ id, userId, attributes, children }) => {
  const variationId = useExperiment({ id, userId, attributes });

  const variations = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return;
    }

    return React.cloneElement(child, {
      variationId
    })
  });

  return (
    <>
      {variations}
    </>
  );
};

export default Experiment;
