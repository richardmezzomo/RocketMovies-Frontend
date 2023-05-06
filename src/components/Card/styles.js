import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    padding: 3.2rem;
    border-radius: 1.6rem;

    > h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: .8rem;
    }

		> p {
			font-size: 1.6rem;
			color: #999591;
      margin: 1.5rem 0;
		}
`

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
`