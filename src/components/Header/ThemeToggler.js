import React from 'react';
import { ThemeTogglerContainer, ThemeTogglerButton } from './HeaderStyles';

function ThemeToggler() {
  const handleThemeToggle = () => {
    // Обработчик смены темы
  };

  return (
    <ThemeTogglerContainer>
      <ThemeTogglerButton onClick={handleThemeToggle}>
        {/* Иконка или текст для темы */}
      </ThemeTogglerButton>
    </ThemeTogglerContainer>
  );
}

export default ThemeToggler;
