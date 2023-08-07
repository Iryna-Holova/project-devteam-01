import styled from 'styled-components';

export const Container = styled.div`
list-style-type: none;
  position: relative;
  display: flex;
  gap: 18px;
  padding: 12px 18px;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 14px 24px;
  }
`;

export const Page = styled.button`
  font-size: 12px;
  line-height: 18px;
  color: ${props =>
    props.$active === 'true' ? 'var(--color-icons)' : 'var(--color-pages)'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background-color: ${props =>
    props.$active === 'true'
      ? 'var(--color-accent-secondary-accent)'
      : 'transparent'};
  border-radius: 50%;
  cursor: ${props => (props.$active === 'true' ? 'default' : 'pointer')};
  user-select: none;
  transition: color var(--transition-time) var(--cubic),
    background-color var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-icons);
    background-color: var(--color-accent-secondary-accent);
  }
`;

export const Shevron = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--color-pages);
  background-color: transparent;
  transition: color var(--transition-time) var(--cubic);

  &.disabled {
    cursor: default;
    opacity: 0.3;

    &:hover {
    color: var(--color-pages);
  }
  }

  &:hover {
    color: var(--color-text-primary);
  }
`
