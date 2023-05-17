import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    padding: 1.6rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`

export const Form = styled.form`
  max-width: 112rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 4rem;

    > a {
      color: ${({theme}) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: .1rem;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  > p {
    font-size: 2rem;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  
`

