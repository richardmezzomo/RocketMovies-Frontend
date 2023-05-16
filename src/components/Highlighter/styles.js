import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew}) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

  border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;

    padding: 1.2rem;

    color: ${({ theme, isNew}) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    background-color: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`