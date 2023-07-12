import React from 'react';
import { FooterLinks, SocialLink } from './SocialLinksStyles';

function SocialLinks() {
  return (
    <FooterLinks>
      <SocialLink href="https://www.facebook.com/">Facebook</SocialLink>
      <SocialLink href="https://www.youtube.com/">YouTube</SocialLink>
      <SocialLink href="https://twitter.com/">Twitter</SocialLink>
      <SocialLink href="https://www.instagram.com/">Instagram</SocialLink>
    </FooterLinks>
  );
}

export default SocialLinks;
