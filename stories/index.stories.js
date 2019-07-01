import React from 'react';

import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import { ThemeProvider, withTheme } from '../src';


const Foo = withTheme(({ theme }) => (
  <div style={{ color: theme.color }}>
    {`I get my color from the theme`}
  </div>
));

storiesOf('Theme Provider', module)
  .add('default', () => (
    <ThemeProvider theme={{ color: color('Theme color', 'red')}}>
      <Foo/>
      <div>{`I don't`}</div>
    </ThemeProvider>
  ));
