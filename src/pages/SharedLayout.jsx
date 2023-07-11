import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Categories from './Categories';
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Categories/>
      <Footer />
    </>
  );
};

export default SharedLayout;
