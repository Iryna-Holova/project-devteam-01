import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import MainLoader from "helpers/MainLoader/MainLoader";
import PageContainer from "helpers/PageContainer/PageContainer";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <PageContainer>
        <Suspense fallback={<MainLoader />}>
          <Outlet />
        </Suspense>
      </PageContainer>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;