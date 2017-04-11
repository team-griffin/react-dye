import React, { PropTypes } from 'react';
import { Broadcast } from 'react-broadcast';
import { compose, setPropTypes, setDisplayName } from 'recompose';

const ThemeProvider = ({
  theme,
  children,
}) => {
  return (
    <Broadcast
      channel="theme"
      value={theme}
    >
      {children}
    </Broadcast>
  );
};


export const PureComponent = ThemeProvider;

export const enhance = compose(
  setDisplayName('ThemeProvider'),
  setPropTypes({
    theme: PropTypes.object,
    children: PropTypes.node.isRequired,
  }),
);

export default enhance(ThemeProvider);