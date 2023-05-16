import styled from "styled-components";

export const Container = styled.header `
    grid-area: header;
    height: 11.6rem;
    width: 100%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_200};

    display: flex;
    justify-content: space-between;

    padding: 0 12.3rem;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2.4rem;
        align-self: center;
    }
`

export const Profile = styled.div `
    display: flex;
    align-items: center;

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: .9rem;

        span {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            display: inline-block;
        }
    }
`

export const Search = styled.div `
    width: 65%;
    display: flex;
    align-items: center;
`