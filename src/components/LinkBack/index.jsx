

import { Container, Link } from './styles';

export function LinkBack({ to, children }) {
  return (
    <Container>
      <Link to={to}>{children}</Link>
    </Container>
  );
}