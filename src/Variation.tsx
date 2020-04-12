import React, { Fragment, FC } from 'react';

interface Props {
  id?: string;
  variationId?: string;
}

const Variation: FC<Props> = ({ id = null, variationId, children }) => {
  const isActive = id === variationId;

  return <Fragment>{isActive && children}</Fragment>;
};

export default Variation;
