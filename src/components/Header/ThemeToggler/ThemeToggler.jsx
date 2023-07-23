import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { UncheckedHandle, CheckedHandle } from './ThemeToggler.styled';
import useApp from 'hooks/useApp';
import { setTheme } from 'redux/App/slice';
import { DARK, LIGHT } from 'utils/constants';
import { useDispatch } from 'react-redux';

const ThemeToggler = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const { theme } = useApp();
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    console.log('handleThemeToggle');
    setDarkMode(!isDarkMode);
    if (isDarkMode) dispatch(setTheme(DARK));
    else dispatch(setTheme(LIGHT));
  };

  // Эффект для чтения состояния из LocalStorage при загрузке компонента
  useEffect(() => {
    //  const storedTheme = localStorage.getItem('theme');
    console.log('useEffect');
    if (theme === DARK) {
      setDarkMode(true);
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
