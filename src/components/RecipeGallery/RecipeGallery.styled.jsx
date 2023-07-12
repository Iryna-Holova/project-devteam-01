import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    row-gap: 100px;
  }
`;

export const Recipe = styled.li`
  z-index: 2;
  overflow: hidden;
  border-radius: 8px;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.03);
    transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const RecipeContainer = styled.div`
  position: relative;
  display: block;
`;

export const Description = styled.div`
  position: absolute;
  left: 18px;
  bottom: 24px;
  padding: 16px;
  width: 275px;
  background: #FFFFFF;
  color: #3E4462;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    left: 16px;
  }

  @media screen and (min-width: 1440px) {
    width:253px;
   padding-right:0px;
  }

/* Не давать стили на теги */

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
    text-align: left;
    height: 20px;
    overflow: hidden;
  }
`;

export const RecipeImg = styled.img`
  width: 343px;
  height: 323px;
  object-fit: cover;
  :hover {
    transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 299px;
    gap: 14px;
  }
`;