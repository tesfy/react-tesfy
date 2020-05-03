import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { createInstance, TesfyProvider, Feature } from '../src';

const isFeatureEnabled = jest.fn();

jest.mock('tesfy', () => ({
  Engine: jest.fn(() => {
    return {
      getUserId: jest.fn(),
      getAttributes: jest.fn(),
      isFeatureEnabled
    };
  })
}));

beforeEach(() => {
  isFeatureEnabled.mockReset();
});

const setup = (children: ReactNode) => {
  const engine = createInstance({ datafile: {} });

  return render(<TesfyProvider engine={engine}>{children}</TesfyProvider>);
};

describe('Feature', () => {
  it('renders enabled feature', () => {
    const id = 'feature-1';
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';
    const attributes = {};
    isFeatureEnabled.mockReturnValueOnce(true);

    const { getByTestId } = setup(
      <Feature id={id} userId={userId} attributes={attributes}>
        {isEnabled => isEnabled && <div data-testid="feature" />}
      </Feature>
    );

    expect(isFeatureEnabled).toHaveBeenCalledWith(id, userId, attributes);
    expect(getByTestId('feature')).toBeDefined();
  });

  it('renders disabled feature', () => {
    const id = 'feature-1';
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';
    const attributes = {};
    isFeatureEnabled.mockReturnValueOnce(false);

    const { queryByTestId } = setup(
      <Feature id={id} userId={userId} attributes={attributes}>
        {isEnabled => isEnabled && <div data-testid="feature" />}
      </Feature>
    );

    expect(isFeatureEnabled).toHaveBeenCalledWith(id, userId, attributes);
    expect(queryByTestId('feature')).toBeNull();
  });
});
