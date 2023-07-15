import React from 'react';
import { FooterLinks, SocialLink } from './SocialLinks.styled';

import facebookIcon from '../../assets/svg/FollowUsIcons/facebook.svg';
import youtubeIcon from '../../assets/svg/FollowUsIcons/youTube.svg';
import twitterIcon from '../../assets/svg/FollowUsIcons/twiter.svg';
import instagramIcon from '../../assets/svg/FollowUsIcons/instagram.svg';

function SocialLinks() {
  return (
    <FooterLinks>
      <SocialLink href="https://www.facebook.com/">
        <img src={facebookIcon} alt="Facebook" />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/">
        <img src={youtubeIcon} alt="YouTube" />
      </SocialLink>
      <SocialLink href="https://twitter.com/">
        <img src={twitterIcon} alt="Twitter" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/">
        <img src={instagramIcon} alt="Instagram" />
      </SocialLink>
    </FooterLinks>
  );
}

export default SocialLinks;
