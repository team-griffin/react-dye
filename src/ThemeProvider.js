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

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
