import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = ({ onToggle, isToggle }) => {
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState('');
    const [loading, setLoading] = useState(true); // Добавлено состояние loading
    
// было добавлено состояние loading и установлено его изначальное значение как true. Затем, внутри блока useEffect, я установил loading в false после завершения эффекта.
// В блоке return, я обернул Outlet в условное выражение, чтобы отобразить его только если loading равно false. 
    
  useEffect(() => {
    if (location.pathname === '/') {
      setHeaderColor('colorMain');
    } else if (location.pathname.includes('/recipe/')) {
      setHeaderColor('recipe');
    } else {
      setHeaderColor('else');
    }

    setLoading(false); // Установка loading в false после завершения эффекта
  }, [location]);

  return (
    <>
      <Header onToggle={onToggle} isToggle={isToggle} color={headerColor} />
      <Suspense fallback={null}>
        {!loading ? <Outlet /> : null} {/* Отображение Outlet только если loading равно false */}
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;