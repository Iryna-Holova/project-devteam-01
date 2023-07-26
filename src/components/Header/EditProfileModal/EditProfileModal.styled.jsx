import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarInputWrapper = styled.div`
  position: relative;
  margin-bottom: 54px;

  > svg {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    bottom: -6px;
    right: 13px;
    color: #fafafa;
    background-color: var(--color-accent);
  }
`;

export const UserAvatar = styled.img`
object-fit: cover;
  width: 88px;
  height: 88px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const AddPicture = styled(Field)`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  position: absolute;
  bottom: -6px;
  right: 13px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
  }
`;

export const NameInputWrapper = styled.div`
  color: var(--color-icons);
  max-width: 100%;
  position: relative;
  opacity: 0.8;
  margin-bottom: 24px;
  > svg {
    position: absolute;
    width: 18px;
    height: 18px;
    stroke: var(--color-icons);
    top: 16px;
    right: 14px;

    &:nth-child(even) {
      left: 14px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    > svg {
      width: 24px;
      height: 24px;
      top: 18px;
      right: 19px;

      &:nth-child(even) {
        left: 19px;
      }
    }
  }
`;

export const NameInput = styled(Field)`
  box-sizing: border-box;
  max-width: 100%;
  width: 282px;
  color: var(--color-icons);
  outline: none;
  padding: 14px 40px 12px 40px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid gray;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;

  &:hover, &:focus {
    border-color: var(--color-text);
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 15px 51px 14px 51px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.36px;
  }
`;

export const EditButton = styled.button`
  background-color: #8baa36;
  color: #fafafa;
  font-size: 14px;
  line-height: 18px;
  border: none;
  border-radius: 6px;
  width: 100%;
  height: 49px;
  cursor: pointer;
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: #22252A;
  }

  &[disabled] {
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    height: 59px;
    font-size: 16px;
  }
`;
