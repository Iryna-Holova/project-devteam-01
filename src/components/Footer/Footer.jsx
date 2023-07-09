import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterLinks,
  SocialLink,
} from './FooterStyles';
import SubscribeForm from './Navigation/Subscribe/SubscribeForm';
import Nav from './Navigation/Nav/Nav';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>So Yummy</FooterText>
        <FooterText>
          <div>
            <ul>
              <li>Database of recipes that can be replenished</li>
              <li>Flexible search for desired and unwanted ingredients</li>
              <li>Ability to add your own recipes with photos</li>
              <li>Convenient and easy to use</li>
            </ul>
          </div>
        </FooterText>
        <Nav />
        <FooterLinks>
          <SocialLink href="https://www.facebook.com/">Facebook</SocialLink>
          <SocialLink href="https://www.youtube.com/">YouTube</SocialLink>
          <SocialLink href="https://twitter.com/">Twitter</SocialLink>
          <SocialLink href="https://www.instagram.com/">Instagram</SocialLink>
        </FooterLinks>
        <SubscribeForm />
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
