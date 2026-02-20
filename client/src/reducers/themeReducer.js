import storageService from '../utils/localStorage';

const themeReducer = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return !state;
    default:
      return state;
  }
};

export const toggleDarkMode = (isDarkMode) => {
  return (dispatch) => {
    storageService.saveDarkMode(isDarkMode);

    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };
};

export const setDarkMode = () => {
  return (dispatch) => {
    // Always enable dark mode by default
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };
};

export default themeReducer;
