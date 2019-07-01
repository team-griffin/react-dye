import React from 'react';
import { Consumer } from './context';
import { compose, setDisplayName } from 'recompose';

const enhance = compose(
  setDisplayName('WithTheme'),
);

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

  return enhance(WithTheme);
};
