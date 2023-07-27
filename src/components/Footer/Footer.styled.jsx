import styled from 'styled-components';

import desktopBottom1x from '../../assets/images/footer/footer-spinach-bottom-desktop-1x.webp';
import desktopBottom2x from '../../assets/images/footer/footer-spinach-bottom-desktop-2x.webp';
import desktopTop1x from '../../assets/images/footer/footer-spinach-top-desktop-1x.webp';
import desktopTop2x from '../../assets/images/footer/footer-spinach-top-desktop-2x.webp';
import tabletBottom1x from '../../assets/images/footer/footer-spinach-bottom-tablet-1x.webp';
import tabletBottom2x from '../../assets/images/footer/footer-spinach-bottom-tablet-2x.webp';
import tabletTop1x from '../../assets/images/footer/footer-spinach-top-tablet-1x.webp';
import tabletTop2x from '../../assets/images/footer/footer-spinach-top-tablet-2x.webp';
import mobileBottom1x from '../../assets/images/footer/footer-spinach-bottom-mobile-1x.webp';
import mobileBottom2x from '../../assets/images/footer/footer-spinach-bottom-mobile-2x.webp';
import mobileTop1x from '../../assets/images/footer/footer-spinach-top-mobile-1x.webp';
import mobileTop2x from '../../assets/images/footer/footer-spinach-top-mobile-2x.webp';

export const FooterContent = styled.footer`
  background-color: var(--color-footer);
  padding-top: 28px;
  padding-bottom: 18px;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: var(--color-start-text);

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 44px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 72px 175px;
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`;

export const FooterText = styled.ul`
  display: none;

  @media (min-width: 768px) {
    padding-left: 22px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  @media (min-width: 1440px) {
    width: 418px;
    font-size: 18px;
    line-height: 24px;
    padding-left: 30px;
  }
`;

export const FooterBarText = styled.div`
color: var(--color-icons);
  padding: 28px 0 20px 0;
  display: flex;
  justify-content: center;

  background-position: bottom right;
  background-size: 179px 155px;
  background-repeat: no-repeat;
  background-image: -webkit-image-set(
    url(${mobileBottom1x}) 1x,
    url(${mobileBottom2x}) 2x
  );

  > span {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 32px 0;
    background-size: 341px 261px;
    background-image: -webkit-image-set(
      url(${tabletBottom1x}) 1x,
      url(${tabletBottom2x}) 2x
    );
  }

  @media (min-width: 1440px) {
    background-size: 531px 391px;
    background-image: -webkit-image-set(
      url(${desktopBottom1x}) 1x,
      url(${desktopBottom2x}) 2x
    );
  }
`;

export const RightText = styled.span`
  margin-left: 14px;
`;

export const MainContainer = styled.main`
  background-position: bottom -250px left;
  background-size: 315px 487px;
  background-repeat: no-repeat;
  background-image: -webkit-image-set(
    url(${mobileTop1x}) 1x,
    url(${mobileTop2x}) 2x
  );

  @media (min-width: 768px) {
    background-position: bottom -380px left;
    background-size: 500px 790px;
    background-image: -webkit-image-set(
      url(${tabletTop1x}) 1x,
      url(${tabletTop2x}) 2x
    );
  }

  @media (min-width: 768px) {
    background-position: bottom -380px left;
    background-size: 500px 790px;
    background-image: -webkit-image-set(
      url(${tabletTop1x}) 1x,
      url(${tabletTop2x}) 2x
    );
  }

  @media (min-width: 1440px) {
    background-position: bottom -525px left;
    background-size: 696px 1037px;
    background-image: -webkit-image-set(
      url(${desktopTop1x}) 1x,
      url(${desktopTop2x}) 2x
    );
  }
`;
