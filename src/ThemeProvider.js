import React from 'react';
import { compose, setDisplayName } from 'recompose';
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

export const enhance = compose(
  setDisplayName('ThemeProvider'),
);

export default enhance(ThemeProvider);
