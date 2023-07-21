import React from 'react';
import { FooterLinks, SocialLink } from './SocialLinks.styled';

import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

function SocialLinks() {
  return (
    <FooterLinks>
      <SocialLink
        target="blanc"
        rel="noopener noreferrer"
        href="https://www.facebook.com/"
      >
        <BsFacebook />
      </SocialLink>
      <SocialLink
        target="blanc"
        rel="noopener noreferrer"
        href="https://www.youtube.com/"
      >
        <BsYoutube />
      </SocialLink>
      <SocialLink
        target="blanc"
        rel="noopener noreferrer"
        href="https://twitter.com/"
      >
        <BsTwitter />
      </SocialLink>
      <SocialLink
        target="blanc"
        rel="noopener noreferrer"
        href="https://www.instagram.com/"
      >
        <BsInstagram />
      </SocialLink>
    </FooterLinks>
  );
}

export default SocialLinks;
