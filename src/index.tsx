import React from 'react';

import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import AppRouter from 'components/AppRouter';
import ThemeProvider from 'components/ThemeProvider';
import GlobalStyles from 'global/themes/globalStyles';
import { store } from 'store';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <Provider store={store}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Finish creating template -> https://alexgrischuk.medium.com/how-to-create-custom-create-react-app-cra-templates-73a5196edeb
// commitlint and husky?
