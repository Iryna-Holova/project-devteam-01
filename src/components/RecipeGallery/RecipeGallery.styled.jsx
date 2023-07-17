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

export const RecipeContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
`;

export const Description = styled.div`
  position: absolute;
  left: 18px;
  bottom: 24px;
  padding: 16px;
  width: 275px;
  background: var(--color-secondary);
  color: var(--color-text-secondary);
  border-radius: 8px;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s ease-in;
  @media screen and (min-width: 768px) {
    left: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 253px;
    padding-right: 0px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
    text-align: left;
    height: 20px;
    overflow: hidden;
    transition: opacity 0.5s ease-in;
  }
`;
export const Recipe = styled.li`
  z-index: 2;
  overflow: hidden;
  border-radius: 8px;
  transition: var(--transition-time) var(--cubic);

  :hover,
  :focus {
    transform: scale(1.03);
    transition: var(--transition-time) var(--cubic);
    box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    ${Description} {
      opacity: 0;
      transition: opacity 0.5s step-start 0.2s;
    }
  }
`;

export const RecipeImg = styled.img`
  width: 343px;
  height: 323px;
  object-fit: cover;
  :hover {
    transition: var(--transition-time) var(--cubic);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 299px;
    gap: 14px;
  }
`;
