import styled from 'styled-components';
export const ContainerRecipe = styled.section`
  
  background-size: 315px 487px;
  background-repeat: no-repeat;
  background-position: bottom -225px left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    
  }

  @media screen and (min-width: 768px) {
    
    background-size: 500px 790px;
    background-repeat: no-repeat;
    background-position: bottom -380px left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      
    }
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 118px;
    
    background-size: 696px 1037px;
    background-repeat: no-repeat;
    background-position: bottom -518px left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      
    }
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 320px;

  @media screen and (max-width: 767px) {
    max-width: 767px;
  }


  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
