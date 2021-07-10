import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe("App", () => {

  beforeEach(cleanup);

  test('Rendering without crash', () => {
    expect(render(<App />)).not.toBeNull();
  });
  
});
