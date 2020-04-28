import React from 'react';
import { Engine } from 'tesfy';
import { render } from '@testing-library/react';
import { TesfyProvider } from '../src';

jest.mock('tesfy', () => ({
  Engine: jest.fn()
}));

describe('TesfyProvider', () => {
  it('initializes engine', () => {
    const datafile = {};
    const attributes = {};
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';

    render(
      <TesfyProvider datafile={datafile} userId={userId} attributes={attributes}>
        {null}
      </TesfyProvider>
    );

    expect(Engine).toHaveBeenCalledWith({ datafile, userId, attributes });
  });
});
