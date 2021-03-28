import React from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import theme from 'global/themes/';

declare interface IThemeProvider {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ children }: IThemeProvider) => <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;

ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
