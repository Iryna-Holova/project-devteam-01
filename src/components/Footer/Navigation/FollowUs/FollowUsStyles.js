import styled from 'styled-components';

export const FollowUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SocialLinkItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: blue;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
