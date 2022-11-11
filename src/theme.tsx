import theme from 'styled-theming';
import lightImg from './Images/light-theme-background.png';
import darkImg from './Images/dark-theme-background.png';

export const backgroundColor: theme.ThemeSet = theme('mode', {
  light: lightImg,
  dark: darkImg
});

export const textColor: theme.ThemeSet = theme('mode', {
  light: '#191919',
  dark: '#fafafa'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222'
});