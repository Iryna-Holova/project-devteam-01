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
    position: absolute;
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
    }
`

export const Btn = styled.button`
    width: 161px;
    height: 53px;
    padding-left: 32px;
    position: relative;
    top: 0px;
    right: -200px;
    background-color: var(--color-icons);
    color: var(--color-main);
    border-radius: 24px 44px;

    &:hover,
    &:focus {
        color: var(--color-accent);
    }

    @media screen and (min-width: 768px) {
        width: 161px;
        height: 59px;
        font-size: 14px;
    }

    @media screen and (min-width: 1440px) {
        width: 161px;
        height: 70px;
        padding: 23px;
        font-size: 16px;
    }
`

export const Select = styled.select`
    width: 198px;
    height: 49px;
    letter-spacing: -0.28px;
    padding: 0 14px;
    margin-left: 18px;
`

export const Div = styled.div`
    margin-top: 115px;
    margin-bottom: 27px;
`