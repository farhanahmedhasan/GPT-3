import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import usePrefersDarkMode from './usePrefersDarkMode';

const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [localStorageValue, setValue] = useLocalStorage('dark-mode', undefined);

  const enabled = localStorageValue === undefined ? prefersDarkMode : localStorageValue;

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  }, [enabled]);

  return [enabled, setValue];
};

export default useDarkMode;
