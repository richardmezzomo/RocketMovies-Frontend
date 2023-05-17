import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const NewMovie = styled(Link)`
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    align-items: center;

    padding: 1.4rem 3.2rem;
    border-radius: .8rem;
    height: 48px;

    &disabled {
        opacity: 0.5;        
    }    
`
export const Content = styled.div`
    padding: 3.8rem 12.3rem 5.8rem;    

    grid-area: content;
    overflow-y: scroll;

    > header {
            padding-bottom: 3.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center; 
            > h1 {            
                font-style: normal;
                font-weight: 400;
                font-size: 3.2rem;
                line-height: 4.2rem;

                color: #FFFFFF;
            }           
        }
    
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    height: 71.6rem;
`