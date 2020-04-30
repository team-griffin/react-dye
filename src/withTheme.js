import React from 'react';
import { Consumer } from './context';

export default (WrappedComponent) => {
  const WithTheme = (props) => (
    <Consumer>
      {(providedTheme) => (
        <WrappedComponent
          theme={providedTheme}
          {...props}
        />
      )}
    </Consumer>
  );

  // eslint-disable-next-line
  WithTheme.displayName = 'WithTheme';

  return WithTheme;
};
