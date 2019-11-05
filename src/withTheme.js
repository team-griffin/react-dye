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

  WithTheme.displayName = 'WithTheme';

  return WithTheme;
};
