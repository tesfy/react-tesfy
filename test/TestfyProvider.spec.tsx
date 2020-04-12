import React from 'react';
import { Engine } from 'testfy';
import { render } from '@testing-library/react';
import { TestfyProvider } from '../src';

jest.mock('testfy', () => ({
  Engine: jest.fn()
}));

describe('TestfyProvider', () => {
  it('initializes engine', () => {
    const datafile = {};
    const attributes = {};
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';

    render(
      <TestfyProvider datafile={datafile} userId={userId} attributes={attributes}>
        {null}
      </TestfyProvider >
    );

    expect(Engine).toHaveBeenCalledWith(datafile, undefined, userId, attributes);
  });
});
