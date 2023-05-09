import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > header {
    background-color: ${({theme}) => theme.COLORS.PINK_300};
    padding: 6.4rem 14.4rem;
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 30px auto 0;
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

  }
`