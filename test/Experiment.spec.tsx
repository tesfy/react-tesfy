import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { TestfyProvider, Experiment, Variation } from '../src';

const getVariationId = jest.fn();

jest.mock('testfy', () => ({
  Engine: jest.fn(() => {
    return {
      getVariationId
    };
  })
}));

beforeEach(() => {
  getVariationId.mockReset();
});

const setup = (children: ReactNode) => {
  return render(
    <TestfyProvider>
      {children}
    </TestfyProvider >
  );
};

describe('Experiment', () => {
  it('renders variation', () => {
    const id = 'experiment-1';
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';
    getVariationId.mockReturnValueOnce('1');

    const { getByTestId } = setup((
      <Experiment id={id} userId={userId}>
        <Variation>
          <div />
        </Variation>
        <Variation id="0">
          <div />
        </Variation>
        <Variation id="1">
          <div data-testid="variation" />
        </Variation>
      </Experiment>
    ));

    expect(getVariationId).toHaveBeenCalledWith(id, userId, undefined);
    expect(getByTestId('variation')).toBeDefined();
  });

  it('renders control', () => {
    const id = 'experiment-1';
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';
    getVariationId.mockReturnValueOnce(null);

    const { getByTestId } = setup((
      <Experiment id={id} userId={userId}>
        <Variation>
          <div data-testid="control" />
        </Variation>
        <Variation id="0">
          <div />
        </Variation>
      </Experiment>
    ));

    expect(getVariationId).toHaveBeenCalledWith(id, userId, undefined);
    expect(getByTestId('control')).toBeDefined();
  });
});
