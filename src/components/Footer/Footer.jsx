import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  // LogoText,
  // LogoImage,
  FooterLogoText,
  Text,
  // FooterNav,
  FooterBarText,
  LeftText,
  RightText,
  FooterTextContainer,
} from './Footer.styled';
import SubscribeForm from './Subscribe/SubscribeForm';
import Nav from './Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';
import Logo from 'components/Header/Logo';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTextContainer className="container">
          <FooterLogoText>
            <Logo>So Yummy</Logo>
            <FooterText>
              <Text>Database of recipes that can be replenished</Text>
              <Text>Flexible search for desired and unwanted ingredients</Text>
              <Text>Ability to add your own recipes with photos</Text>
              <Text>Convenient and easy to use</Text>
            </FooterText>
          </FooterLogoText>
          <Nav />
          <SubscribeForm />
        </FooterTextContainer>
        <SocialLinks />
      </FooterContent>

      <FooterBarText>
        <LeftText>© 2023 All Rights Reserved.</LeftText>
        <RightText>Terms of Service</RightText>
      </FooterBarText>
    </FooterContainer>
  );
}

export default Footer;
