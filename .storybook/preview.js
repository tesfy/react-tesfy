import React from 'react';
import { addDecorator } from '@storybook/react';
import { createInstance, TesfyProvider } from '../src';
import datafile from '../stories/fixtures/datafile.json';

const engine = createInstance({ datafile });

addDecorator(story => (
  <TesfyProvider engine={engine}>
    {story()}
  </TesfyProvider >
));
