import React from 'react';
import { FooterLinks, SocialLink } from './SocialLinks.styled';

import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

function SocialLinks() {
  return (
    <FooterLinks>
      <SocialLink href="https://www.facebook.com/">
        <BsFacebook />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/">
        <BsYoutube />
      </SocialLink>
      <SocialLink href="https://twitter.com/">
        <BsTwitter />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/">
        <BsInstagram />
      </SocialLink>
    </FooterLinks>
  );
}

export default SocialLinks;
