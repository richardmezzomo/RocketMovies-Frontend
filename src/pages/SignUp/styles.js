import styled from "styled-components";
import background from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    align-self: flex-start;

    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({theme}) => theme.COLORS.WHITE};

    align-self: flex-start;
    margin-bottom: 4.8rem;
  }

  > button {
    margin: 2.4rem 4.8rem;
  }

  > a {
    color: ${({theme}) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: .1rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`