import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState('');
  const [loading, setLoading] = useState(true); // Добавлено состояние loading

  // было добавлено состояние loading и установлено его изначальное значение как true. Затем, внутри блока useEffect, я установил loading в false после завершения эффекта
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
      <Header color={headerColor} />
      <Suspense fallback={null}> {/* Отображение Outlet только если loading равно false */}
        {!loading && <Outlet />}
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;