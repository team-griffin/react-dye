import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import { ThemeProvider, withTheme } from '../src';
import useTheme from '../src/useTheme';
import withThemeHook from '../src/withThemeHook';


const WithTheme = withTheme(({ theme }) => (
  <div style={{ color: theme.color }}>
    {`I get my color from the theme`}
  </div>
));

const UseTheme = () => {
  const theme = useTheme(); 
  return (
    <div style={{ color: theme.color }}>
      {`I get my color from the theme`}
    </div>
  );
};

const WithThemeHook = (props) => {
  const newProps = withThemeHook(props); 
  return (
    <div style={{ color: newProps.theme.color }}>
      {`I get my color from the theme`}
    </div>
  );
};

storiesOf('Theme Provider', module)
  .add('withTheme', () => (
    <ThemeProvider theme={{ color: color('Theme color', 'red')}}>
      <WithTheme/>
      <div>{`I don't`}</div>
    </ThemeProvider>
  ))
  .add('useTheme', () => (
    <ThemeProvider theme={{ color: color('Theme color', 'red')}}>
      <UseTheme/>
      <div>{`I don't`}</div>
    </ThemeProvider>
  ))
  .add('withThemeHook', () => (
    <ThemeProvider theme={{ color: color('Theme color', 'red')}}>
      <WithThemeHook/>
      <div>{`I don't`}</div>
    </ThemeProvider>
  ));
