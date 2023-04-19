import styled from "styled-components";

export const Container = styled.header `
    grid-area: header;
    height: 11.6rem;
    width: 100%;

    border-bottom-width: .1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};

    display: flex;
    justify-content: space-around;

    padding: clamp(0rem, 3vw, 12.3rem);

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2.4rem;
        align-self: center;
    }

    > #search {
        align-self: center;
        padding: 1.9rem 2.4rem;
        border-radius: 1rem;
        border: none;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color: ${({theme}) => theme.COLORS.GRAY_100};

        width: clamp(20rem, 40vw, 63rem);
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
        }
    }
`