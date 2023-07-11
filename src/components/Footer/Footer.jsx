import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  LogoText,
  LogoImage,
  FooterLogoText,
  Text,
  FooterNav,
  FooterBarText,
  LeftText,
  RightText,
  FooterTextContainer,
} from './FooterStyles';
import SubscribeForm from './Navigation/Subscribe/SubscribeForm';
import Nav from './Navigation/Nav/Nav';
import SocialLinks from './Navigation/SocialLinks/SocialLinks';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTextContainer>
          <FooterLogoText>
            <LogoText>
              <LogoImage src="" alt="So Yummy" />
              So Yummy
            </LogoText>
            <FooterText>
              <ul>
                <Text>Database of recipes that can be replenished</Text>
                <Text>
                  Flexible search for desired and unwanted ingredients
                </Text>
                <Text>Ability to add your own recipes with photos</Text>
                <li>Convenient and easy to use</li>
              </ul>
            </FooterText>
          </FooterLogoText>
          <FooterNav>
            <Nav />
          </FooterNav>
          <div>
            <SubscribeForm />
          </div>
        </FooterTextContainer>
      </FooterContent>
      <SocialLinks />
      <FooterBarText>
        <LeftText>© 2023 All Rights Reserved.</LeftText>
        <RightText>Terms of Service</RightText>
      </FooterBarText>
    </FooterContainer>
  );
}

export default Footer;
