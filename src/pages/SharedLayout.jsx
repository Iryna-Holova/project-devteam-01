import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Title from 'components/MainTitle/Title.styled';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
