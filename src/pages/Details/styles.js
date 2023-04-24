import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
        "header"
        "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 3.8rem 0;
    }
`

export const Content = styled.div`
    max-width: 111.3rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    div:first-child {
        align-self: flex-start;
    }

    > h1 {
        font-size: 3.6rem;
        font-weight: 500;
        padding: 2.4rem 0;   
    }

    > p {
        font-size: 1.6rem;
        font-weight: 400;
        text-align: justify;
        padding-bottom: 2.4rem;
    }
`