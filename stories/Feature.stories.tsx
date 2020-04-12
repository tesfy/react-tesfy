import React from 'react';
import { Feature } from '../src';

export default {
  title: 'Feature',
  component: Feature
};

export const Default = () => {
  return (
    <>
      <Feature id="feature-1" userId="676380e0-7793-44d6-9189-eb5868e17a86">
        {isEnabled => isEnabled ? <div>Enabled</div> : <div>Disabled</div>}
      </Feature>
    </>
  );
};
