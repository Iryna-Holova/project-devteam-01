import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Input = styled.input`
    width: 295px;
    height: 53px;
    padding-left: 32px;
    font-size: 12px;
    border: none;
    border-radius: 22px 44px;
    background-color: var(--color-secondary);

    @media screen and (min-width: 768px) {
        width: 362px;
        height: 59px;
        padding-left: 38px;
        font-size: 16px;
    }

    @media screen and (min-width: 1440px) {
        width: 510px;
        height: 70px;
        padding-left: 
        font-size: 
    }
`

export const Btn = styled.button`
    width: 113px;
    height: 53px;
    padding: 16px 32px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    background-color: var(--color-icons);
    color: var(--color-main);
    border-radius: 24px 44px;

    &:hover,
    &:focus {
        background-color: var(--color-accent);
    }

    @media screen and (min-width: 768px) {
        width: 161px;
        height: 59px;
        padding: 16px 52px;
    }

    @media screen and (min-width: 1440px) {
        width: 161px;
        height: 70px;
        padding: 23px 52px;
        font-size: 16px;
    }
`

export const Label = styled.label`
    margin-bottom: 50px;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-text-primary);
    letter-spacing: -0.24px;
    line-height: 1.3;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.2;
    }

    @media screen and (min-width: 1440px) {
        font-size: 18px;
        letter-spacing: -0.24px;
    }
`

export const Select = styled.select`
    width: 146px;
    height: 34px;
    padding: 8px 80px 8px 14px;
    margin-left: 15px;
    border: none;
    background-color: var(--color-input);
    opacity: 0.15700000524520874;
    border-radius: 0px 0px 6px 6px;

    @media screen and (min-width: 768px) {
        width: 175px;
        height: 41px;
        padding: 10px 99px 10px 14px;
        margin-left: 18px;
    }

    @media screen and (min-width: 1440px) {
        width: 198px;
        height: 49px;
        padding: 14px 122px 14px 14px;
    }
`

export const Option = styled.option`
    font-size: 12px;
    color: var(--color-option);
    opacity: 0.5;
    letter-spacing: -0.24px; 

    @media screen and (min-width: 768px) {
        font-size: 14px;
        letter-spacing: -0.28px;
    }
`

export const Div = styled.div`
    position: relative;
    margin-top: 50px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
        margin-bottom: 38px;
    }

    @media screen and (min-width: 1440px) {
        margin-top: 50px;
        margin-bottom: 27px;
    }
`

export const TextUnderImage = styled.p`
    margin-top: 24px;
    margin-bottom: 100px;
    font-size: 14px;
    line-height: 1.0;
    letter-spacing: -0.28px;
    font-weight: 500;
    color: var(--color-option);
    opacity: 0.5;

    @media screen and (min-width: 768px) {
        margin-top: 32px;
        margin-bottom: 200px;
        font-size: 24px;
        letter-spacing: -0.48px;
    }
`