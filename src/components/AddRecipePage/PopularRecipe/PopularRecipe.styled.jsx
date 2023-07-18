import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledSectionWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
   
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color:  var(--color-text-secondary);
`;

export const StyledCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const StyledWrapper = styled.li`
  display: block;
  width: 100%;
  height: 98px;
  padding-bottom: 13px;
  border-bottom: 1px solid rgb(112, 112, 112, 0.17);

  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;


export const StyledCard = styled.div`
  display: flex;
  height: 85px;
  gap: 12px;
`;

export const StyledPicture = styled.img`
  min-width: 104px;
  height: 100%;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 102px;
  }
  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

export const StyledRecipeTitle = styled.h3`
  margin-bottom: 3px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color:   var(--color-text-secondary);
`;

export const StyledInstructions = styled.p`
  display: block;
  width: 213px;
  height: 48px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color:  #7e7e7e;

  @media screen and (min-width: 768px) {
    width: 209px;
  }
  @media screen and (min-width: 1440px) {
    width: 198px;
  }
`;