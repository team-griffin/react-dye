import { createContext } from 'react';

const ThemeContext = createContext(null);

const {
  Provider,
  Consumer,
} = ThemeContext;

export {
  Consumer,
  Provider,
};

export default ThemeContext;