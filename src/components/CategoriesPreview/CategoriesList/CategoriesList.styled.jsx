import styled from 'styled-components';

export const CategoryTitle = styled.h3`
    padding-top: 50px;
    color: var(--color-text-primary);
    font-size: 28px;
    font-weight: 600;
    line-height: 1.0;
    letter-spacing: -0.56px;
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
        font-size: 44px;
        letter-spacing: -0.88px;
    }
`

export const ListItem = styled.li`
    list-style: none;
`