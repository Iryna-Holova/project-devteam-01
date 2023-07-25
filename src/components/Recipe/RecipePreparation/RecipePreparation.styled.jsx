import styled from 'styled-components';

export const PreparationWrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const InstructionWrapper = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 53px;
  }

  @media screen and (min-width: 1440px) {
    width: 757px;
    margin-bottom: 0;
  }
`;

export const InstructionTitle = styled.h3`
  margin-bottom: 28px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
  color: var(--color-text-secondary);
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

export const InstructionList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;

export const InstructionItem = styled.li`
  display: flex;
  gap: 14px;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-start-text);
    background: var(--color-accent);
    border-radius: 100px;
    flex: none;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  & p {
    color: var(--color-text-transparent);
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;
    }

    @media screen and (min-width: 1440px) {
    }
  }
`;

export const ImageWrapper = styled.div`
  & img {
    object-fit: cover;
    border-radius: 8px;
    width: 100%;
    height: 250px;
    @media screen and (min-width: 768px) {
      width: 433px;
      height: 332px;
    }
  }
`;
