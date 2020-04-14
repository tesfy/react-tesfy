import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { TesfyProvider } from '../src';
import datafile from '../stories/fixtures/datafile.json';

addDecorator(story => (
  <TesfyProvider datafile={datafile}>
    {story()}
  </TesfyProvider >
));
