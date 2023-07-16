import styled from 'styled-components';

export const UncheckedHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: var(--color-accent);
`;

export const CheckedHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: var(--color-secondary);
`;
