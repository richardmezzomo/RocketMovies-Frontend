import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }

    > p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }

    > div {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.6rem;
        display: flex;
        align-items: center;
    }
`