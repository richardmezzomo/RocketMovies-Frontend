import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";
`
export const NewMovie = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.8rem 12.3rem 0;
    > button {
        width: 20.7rem;
        font-size: 1.6rem;
        display: flex;
        gap: .8rem;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.BACKGROUND_800};

    }
`
export const Content = styled.div`
    padding: 3.8rem 12.3rem 5.8rem;    
    
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    height: 71.6rem;
`