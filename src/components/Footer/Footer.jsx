import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterLogoText,
  Text,
  LogoStyles,
  FooterBarText,
  LeftText,
  RightText,
  FooterTextContainer,
} from './Footer.styled';
import SubscribeForm from './Subscribe/SubscribeForm';
import Nav from './Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';
import Logo from '../Logo/LogoFooter';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTextContainer className="container">
          <div>
            <LogoStyles>
              <a href="https://iryna-holova.github.io/project-devteam-01/">
                <Logo>So Yummy</Logo>
              </a>
              <FooterLogoText>So Yummy</FooterLogoText>
            </LogoStyles>
            <FooterText>
              <Text>Database of recipes that can be replenished</Text>
              <Text>Flexible search for desired and unwanted ingredients</Text>
              <Text>Ability to add your own recipes with photos</Text>
              <Text>Convenient and easy to use</Text>
            </FooterText>
          </div>
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
