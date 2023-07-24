import React from 'react';

import scrollToTop from 'utils/scroll-to-top';
import {
  FooterContent,
  FooterText,
  FooterBarText,
  RightText,
  FooterTextContainer,
} from './Footer.styled';
import SubscribeForm from './Subscribe/SubscribeForm';
import Nav from './Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';
import Logo from '../Logo/Logo';
import { setQuery } from 'redux/Recipes/SearchBy/slice';
import { useDispatch } from 'react-redux';
import useSearchBy from 'hooks/useSearchBy';

function Footer() {
  const { query } = useSearchBy();
  const dispatch = useDispatch();
  const handleNavClick = e => {
    if ((e.target.text = 'Ingredients')) {
      dispatch(setQuery({ param: 'ingredients', value: query.value }));
    }

    scrollToTop();
  };

  return (
    <>
      <FooterContent>
        <FooterTextContainer className="container">
          <div>
            <Logo className="footer">
              <span>So Yummy</span>
            </Logo>
            <FooterText>
              <li>Database of recipes that can be replenished</li>
              <li>Flexible search for desired and unwanted ingredients</li>
              <li>Ability to add your own recipes with photos</li>
              <li>Convenient and easy to use</li>
            </FooterText>
          </div>
          <Nav handleNavClick={handleNavClick} />
          <SubscribeForm />
        </FooterTextContainer>
        <SocialLinks />
      </FooterContent>

      <FooterBarText>
        <span>© 2023 All Rights Reserved.</span>
        <RightText>Terms of Service</RightText>
      </FooterBarText>
    </>
  );
}

export default Footer;
