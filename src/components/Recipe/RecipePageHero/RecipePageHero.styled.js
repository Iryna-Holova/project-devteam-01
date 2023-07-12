import styled from 'styled-components';

export const RecipePageHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-repeat: no-repeat;
  margin-bottom: 32px;
  padding-top: 97px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 80px;
  background-size: 100%;
 

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
 
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 50px;
    padding-top: 136px;
    
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      
    }
  }
  @media screen and (min-width: 1440px) {
    padding-top: 170px;
    padding-left: 100px;
    padding-right: 100px;
    
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      
    }
  }
`;

export const RecipePageHeroTitle = styled.title`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  color: #8BAA36;
  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: clip;

  @media screen and (min-width: 768px) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`;

export const RecipePageHeroText = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  width: 303px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: clip;
  color: #22252A;

  @media screen and (min-width: 768px) {
    width: 506px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    width: 656px;
  }
`;
