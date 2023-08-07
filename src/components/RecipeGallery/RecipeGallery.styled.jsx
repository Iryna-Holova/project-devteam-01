import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px 14px;
  }
`;

export const Recipe = styled.li`
  width: 100%;
  height: 323px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 3 * 14px) / 4);
  }
`;

export const RecipeContainer = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const RecipeImg = styled.img`
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform var(--transition-time) var(--cubic);

  ${RecipeContainer}:hover &,
  ${RecipeContainer}:focus & {
    transform: scale(1.03);
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 2px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(250, 250, 250, 0.6);
  background-color: transparent;
  transition: color var(--transition-time) var(--cubic),
    transform var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-warning);
    transform: scale(1.3);
  }

  &.isFavorite {
    color: var(--color-warning);
  }

  > svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }
`;

export const Description = styled.div`
  position: absolute;
  left: 50%;
  top: 245px;
  transform: translate(-50%, 0);
  width: 307px;
  max-width: 100%;
  max-height: 52px;
  padding: 16px;
  background: var(--color-secondary);
  color: var(--color-text-secondary);
  border-radius: 8px;
  transition: max-height var(--transition-time) var(--cubic),
    transform var(--transition-time) var(--cubic);

  ${RecipeContainer}:hover &,
  ${RecipeContainer}:focus & {
    max-height: 100%;
    transform: translate(-50%, 27px);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 268px;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;

    ${RecipeContainer}:hover &,
    ${RecipeContainer}:focus & {
      white-space: wrap;
    }
  }
`;
