import useTheme from './useTheme';

const withThemeHook = (props) => {
  return ({
    theme: useTheme(),
    ...props,
  });
};

export default withThemeHook;