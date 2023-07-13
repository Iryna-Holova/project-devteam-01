import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(139, 170, 54, 1);
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  width: 359px;
  height: 38px;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    width: 664px;
    height: 58px;
    margin-top: 72px;
    margin-left: 32px;
    margin-right: 32px;
   
  }

  @media screen and (min-width: 1280px) {
   width: 1160px;
   height: 60px;
   
  }
`;


const Title = styled.div`
color: #FAFAFA;
font-family: Poppins;
font-size: 12px;
font-weight: 600;
padding-left: 10px;
padding-right: 10px;

 @media screen and (min-width: 768px) {
   font-size: 18px;
   padding-left: 20px;
   padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
   padding-left: 40px;
   padding-right: 40px;
  }
`;

const TitleN = styled.div`
display: block;
margin-left: 148px;
margin-right: 0;
color: #FAFAFA;
font-family: Poppins;
font-size: 12px;
font-weight: 600;



 @media screen and (min-width: 768px) {
   font-size: 18px;
   margin-left: 260px;
   
  }

  @media screen and (min-width: 1280px) {
    margin-left: 750px;
  
  }

`;

const IngredientsListContainer = styled.div`
   width: 375px;
   height: 1379px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 8px;
   margin-left: 16px

   @media screen and (min-width: 768px) {
   width: 704px;
   margin-top: 7px;
   margin-left: 32px
  }

  @media screen and (min-width: 1280px) {
   width: 1160px;
   
`;

const IngredientItem = styled.div`
  display: flex;
 
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  width: 343px;

  @media screen and (min-width: 768px) {
   padding-top: 43px;
   padding-bottom: 43px;
   width: 644px;
   margin-left: 32px;
   margin-right: 32px;
  }

   @media screen and (min-width: 1280px) {
   width: 1160px;
   

`;

const IngredientImage = styled.img`
  width: 60px;
  height: 60px;
  padding: 6px;
  border-radius: 8px;
  background: #ebf3d4;
  margin-right: 10px;

  
   @media screen and (min-width: 768px) {
   width: 93px;
   height: 97px;
   padding: 8px 6px;
   margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
   
`;

const IngredientDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: space-between;
  

  
`;

const IngredientName = styled.span`
  font-weight: bold;
  
  margin-top: 0;
  color: #3E4462;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;

  @media screen and (min-width: 768px) {
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
  }

`;

const QuantityIndicator = styled.div`
  width: 37px;
  height: 23px;
  background-color: #8baa36;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 26px; 

   @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    margin-right: 80px; 

    @media screen and (min-width: 1280px) {
    margin-right: 65px; 
  }

`;


const IngredientQuantity = styled.span`
color: #FAFAFA;
text-align: center;
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;

 @media screen and (min-width: 768px) {
    font-size: 18px; 
`;


const RemoveButton = styled.button`
  
  height: 14px;
 
  margin-right: 8px;
  border: none;
  color: transparent;
  background-color: transparent;
  border-color: transparent;

   @media screen and (min-width: 768px) {
  
    margin-right: 26px;

    @media screen and (min-width: 1280px) {
    margin-right: 57px;
    margin-left: 13px;


   .remove-icon {
    max-width: none;
    width: 14px;
    height: 14px;
    

     @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  

  }

   
  }
`;

export const EmptyListImage = styled.img`
  width: 350px;
  height: 225px;
  margin-left: 10px;
  margin-top: 32px;
  
`;

export const EmptyListText = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  margin-left: 55px;
  margin-top: 32px;
  margin-bottom: 32px;
`;


export {
  Container,
  HeaderContainer,
  Title,
  TitleN, 
  IngredientsListContainer,
  IngredientItem,
  IngredientImage,
  IngredientDetails,
  IngredientName,
  IngredientQuantity,
  RemoveButton,
  QuantityIndicator,
  
};
