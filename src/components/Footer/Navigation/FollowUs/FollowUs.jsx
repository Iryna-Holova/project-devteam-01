import React from 'react';
import {
  FollowUsContainer,
  SocialLinksList,
  SocialLinkItem,
  SocialLink,
} from './FollowUsStyles';

function FollowUs() {
  return (
    <FollowUsContainer>
      <SocialLinksList>
        <SocialLinkItem>
          <SocialLink href="https://www.facebook.com/">Facebook</SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink href="https://www.youtube.com/">YouTube</SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink href="https://twitter.com/">Twitter</SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink href="https://www.instagram.com/">Instagram</SocialLink>
        </SocialLinkItem>
      </SocialLinksList>
    </FollowUsContainer>
  );
}

export default FollowUs;
