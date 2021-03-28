import React from 'react';

import { render } from 'global/utils/test-utils';

import GlobalStyles from '.';

describe('GlobalStyles', () => {
  it('snapshot render of global styles', () => {
    const { container } = render(<GlobalStyles />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
