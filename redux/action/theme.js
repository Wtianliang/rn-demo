import Types from './types';
export function themeChange(theme) {
  return {
    type: Types.THEME_CHANGE,
    theme
  }
}