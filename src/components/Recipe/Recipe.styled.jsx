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
export const TableRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: #FAFAFA;
  background-color: #8BAA36;
  @media screen and (min-width: 768px) {
    height: 58px;
    margin-bottom: 32px;
    padding: 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 0px 40px;
    margin-bottom: 50px;
  }
  p {
    font-weight: 600;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.5;
    }
  }
  span {
    margin-left: 16px;
    @media screen and (min-width: 768px) {
      margin-left: 38px;
    }
    @media screen and (min-width: 1440px) {
      margin-left: 109px;
    }
  }
`;
export const InngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 96px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;
export const ContainerError = styled.div`
  padding-top: 200px;
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
export const RecipeItem = styled.li`
  border-radius: 8px;
  background-color: #EBF3D4;
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  @media screen and (min-width: 768px) {
    padding: 21px 58px 21px 28px;
  }
  @media screen and (min-width: 1440px) {
    padding: 27px 70px 27px 34px;
  }
`;