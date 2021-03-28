/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-restricted-imports */
import React, { FC, ReactElement } from 'react';

import { RenderOptions, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import ThemeProvider from 'components/ThemeProvider';
import { store } from 'store';

import 'jest-styled-components';

declare interface IAllTheProviders {
  children?: React.ReactNode;
}

const AllTheProviders: FC<IAllTheProviders> = ({ children }: IAllTheProviders) => {
  return (
    <ThemeProvider>
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    </ThemeProvider>
  );
};
AllTheProviders.defaultProps = {
  children: null,
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

export { userEvent };
