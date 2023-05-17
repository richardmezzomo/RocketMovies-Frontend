import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
        "header"
        "content";


        
`

export const Content = styled.div`
    padding: 3.8rem 12.3rem ;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    
    grid-area: content;
    overflow-y: scroll;

    

    div:first-child {
        align-self: flex-start;
    }

    > h1 {
        font-size: 3.6rem;
        line-height: 4.7rem;
        font-weight: 500;
        padding: 2.4rem 0;
    }

    > p {
        font-size: 1.6rem;
        font-weight: 400;
        text-align: justify;
        padding-bottom: 2.4rem;
    }

    > div {
        margin-bottom: 4rem;
    }

    > div.title {
        display: flex;
        align-items: center;
        gap: 1.9rem;
    }

    > a {
      color: ${({theme}) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: .1rem;
      padding-bottom: 2.4rem;
    }
`