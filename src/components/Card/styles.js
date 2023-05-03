import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;


`

export const Tags = styled.div`
    > .tag {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`
