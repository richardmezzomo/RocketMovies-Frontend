import { Container } from "./styles";

export function Tag({ value, backgroundColor, ...rest }) {
  return (
    <Container 
    style={{ backgroundColor }}
    {...rest}>
      {value}
    </Container>
  ) 
}