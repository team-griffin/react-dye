# react-dye

```sh
npm i --save @team-griffin/react-dye

yarn add @team-griffin/react-dye
```

This package was created as I was fustrated with the existing theming options for react which all use context or try and resolve the styles for you.

This package uses react-broadcast to avoid the sCU problem.

*Note:* We do not recommend using this on every component that you need to have the theme object.
This is for those edge cases where you can not pass props down the tree any further due to something blocking it (like react-router v3).

## Usage

```javascript
// A.js
import { ThemeProvider } from '@team-griffin/react-dye';

const theme = getYourThemeFromSomewhere(); // Usually this is passed

return (
  <ThemeProvider theme={theme}>
    <MyComponentTree/>
  </ThemeProvider>
);

// B.js
import { withTheme } from '@team-griffin/react-dye';

const MyComponent = (props) => {
  console.log(props.theme);
  return (<div/>);
};

export default withTheme()(MyComponent);
```
