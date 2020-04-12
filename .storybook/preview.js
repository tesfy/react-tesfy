import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { TestfyProvider } from '../src';
import datafile from '../stories/fixtures/datafile.json';

addDecorator(story => (
  <TestfyProvider datafile={datafile}>
    {story()}
  </TestfyProvider >
));
