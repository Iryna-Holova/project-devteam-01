import styled from 'styled-components';

export const EditProfileButton = styled.button`
  // Стили кнопки "Edit Profile"
`;

export const LogoutButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-secondary);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--color-accent-secondary);
  }

  svg {
    margin-right: 8px;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserLogoModalContainer = styled.div`
  background-color: var(--color-secondary);
  padding: 20px;
  border-radius: 5px;
`;
