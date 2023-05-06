import { Container } from "./styles";

export function Tag({ value, backgroundColor }) {
  return (
    <Container 
    style={{ backgroundColor }}
    {...rest}>
      {value}
    </Container>
  ) 
}