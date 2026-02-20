const storageKeyToken = 'readifyUserKey';
const storageKeyDarkMode = 'ayushguptaDarkMode';

const saveUser = (user) =>
  localStorage.setItem(storageKeyToken, JSON.stringify(user));

const loadUser = () => JSON.parse(localStorage.getItem(storageKeyToken));

const logoutUser = () => localStorage.removeItem(storageKeyToken);

const saveDarkMode = (boolean) =>
  localStorage.setItem(storageKeyDarkMode, 'true'); // Always save dark mode

const loadDarkMode = () => 'true'; // Always load dark mode

const storage = {
  saveUser,
  loadUser,
  logoutUser,
  saveDarkMode,
  loadDarkMode,
};

export default storage;
