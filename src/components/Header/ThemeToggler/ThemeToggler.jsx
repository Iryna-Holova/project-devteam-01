import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { UncheckedHandle, CheckedHandle } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  // Эффект для чтения состояния из LocalStorage при загрузке компонента
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Эффект для сохранения состояния в LocalStorage при изменении
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeToggle}
      onColor="#8BAA36"
      offColor="#EFEFEF"
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
