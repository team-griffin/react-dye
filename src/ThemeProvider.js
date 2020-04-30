import React from 'react';
import { Provider } from './context';

const ThemeProvider = ({
  theme,
  children,
}) => (
  <Provider
    value={theme}
  >
    {children}
  </Provider>
);

// eslint-disable-next-line
ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
