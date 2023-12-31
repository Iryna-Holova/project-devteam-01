import styled from 'styled-components';

export const UserModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--color-main);
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--color-accent);
  position: absolute;
  top: 48px;
  left: -68px;
`;

export const EditProfileButton = styled.button`
  color: var(--color-text-main);
  background-color: transparent;
  border: none;
  padding: 12px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-accent);
  }

  > svg {
    width: 14px;
    height: 14px;
  }
`;

export const LogoutButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-secondary);
  padding: 12px 27px;
  border-radius: 24px 44px;
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  transition: background-color var(--transition-time) var(--cubic);

  &:hover {
    background-color: var(--color-icons);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
