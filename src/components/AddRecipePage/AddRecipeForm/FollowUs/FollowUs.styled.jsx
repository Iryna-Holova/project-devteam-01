import styled from 'styled-components';

export const StyledFollowUsBlock = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 100px;
   
    
    
  }
`;



 

export const SocialMediaList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 119px;
    margin: 0;
    padding: 0;
    gap: 14px;
    width: 119px;
    margin-top: 44px;
    text-decoration:none;

    @media screen and (min-width: 768px) {
        margin-top: 38px;
        width: 134px;
        gap: 18px;
      }

    @media screen and (min-width: 1440px) {
        margin-top: 41px;
      }
`;

export const Link = styled.a`

    fill: var(--color-accent)
    transition: fill var(--transition-time) var (--cubic);
    
    &:hover, 
    &:focus {
        fill: var(--color-icons);
}
`;