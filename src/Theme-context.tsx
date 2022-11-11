import React from "react";
import { ThemeContext, Props } from './types';
import { useThemeDetector } from './components/ThemeComponent/theme-detection';

const defaultMode = 'dark';

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext({
  mode: '',
  toggle: () => { }
});

export const useTheme = () => React.useContext(ManageThemeContext);

export const MyThemeProvider: React.FC<Props> = ( { children } ) => {

  const isDarkTheme = useThemeDetector() 

  const [themeState, setThemeState] = React.useState({
    mode: isDarkTheme ? "dark": "light"
  });

  const toggle = (): void => {
    if(isDarkTheme) {
        setThemeState({ mode: 'dark' });
    } else {
        setThemeState({ mode: 'light' });
    }
  }

  return (
    <ManageThemeContext.Provider value={{
      mode: themeState.mode,
      toggle: toggle
    }}>
      {children}
    </ManageThemeContext.Provider>
  );
}