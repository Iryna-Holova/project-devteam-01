import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/loader/loader';
import { MainContainer } from 'components/Footer/Footer.styled';
const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Suspense fallback={<Loader className={'shared'}/>}>
        <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SharedLayout;
