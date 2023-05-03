import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const NewMovie = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.5rem;
    > button {
        width: 20.7rem;
    }
`
export const Content = styled.div`
    padding: 0 12.3rem;
    margin-top: 4.5rem;
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`