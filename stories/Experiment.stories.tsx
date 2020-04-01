import React from 'react';
import { TestfyProvider, Experiment, Variation } from '../src';

export default {
  title: 'Experiment',
  component: Experiment
};

export const Default = () => {
  return (
    <>
      <Experiment id="experiment-1" userId="676380e0-7793-44d6-9189-eb5868e17a86">
        <Variation>
          0
        </Variation>
        <Variation id="0">
          1
        </Variation>
        <Variation id="1">
          2
        </Variation>
      </Experiment>
    </>
  );
}
