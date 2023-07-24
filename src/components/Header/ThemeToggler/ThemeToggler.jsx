import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { UncheckedHandle, CheckedHandle } from './ThemeToggler.styled';
import useApp from 'hooks/useApp';
import { setTheme } from 'redux/App/slice';
import { DARK, LIGHT } from 'utils/constants';
import { useDispatch } from 'react-redux';

const ThemeToggler = () => {
  const { theme } = useApp();
  const [isDarkMode, setDarkMode] = useState(theme === DARK ? true : false);

  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    //console.log('handleThemeToggle', isDarkMode, theme);
    if (!isDarkMode) dispatch(setTheme(DARK));
    else dispatch(setTheme(LIGHT));
    setDarkMode(!isDarkMode);
  };

  // Эффект для чтения состояния из LocalStorage при загрузке компонента
  useEffect(() => {
    //  const storedTheme = localStorage.getItem('theme');
    // console.log('useEffect', theme);
    if (theme === DARK) {
      document.body.dataset.theme = 'dark';
      setDarkMode(true);
    } else {
      delete document.body.dataset.theme;
      setDarkMode(false);
    }
  }, [theme]);

  // // Эффект для сохранения состояния в LocalStorage при изменении
  // useEffect(() => {
  //   isDarkMode ? dispatch(setTheme(DARK)) : dispatch(setTheme(LIGHT));
  // }, [isDarkMode]);

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeToggle}
      onColor="#8BAA36"
      offColor="#251d1d"
      onHandleColor="#E8EAEA"
      offHandleColor="#8BAA36"
      activeBoxShadow="0 0 2px 3px #8BAA36"
      height={24}
      width={48}
      uncheckedIcon={false}
      checkedIcon={false}
      handleDiameter={20}
      // Используем перенесенные стили
      uncheckedHandleIcon={<UncheckedHandle />}
      checkedHandleIcon={<CheckedHandle />}
    />
  );
};

export default ThemeToggler;
