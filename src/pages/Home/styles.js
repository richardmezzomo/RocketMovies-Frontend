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
    > button {
        width: 20.7rem;
    }
`
export const Content = styled.div``