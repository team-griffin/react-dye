import React, { PropTypes } from 'react';
import { Subscriber } from 'react-broadcast';
import { compose, setPropTypes, setDisplayName } from 'recompose';

export default () => (WrappedComponent) => {
  const WithTheme = (props) => (
    <Subscriber channel="theme">
      {(providedTheme) => (
        <WrappedComponent
          theme={providedTheme}
          {...props}
        />
      )}
    </Subscriber>
  );

  const enhance = compose(
    setDisplayName('WithTheme'),
    setPropTypes({
      theme: PropTypes.object,
    }),
  );

  return enhance(WithTheme);
};