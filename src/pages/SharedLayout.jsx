import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/loader/loader';
const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader className={'shared'}/>}>
        <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
