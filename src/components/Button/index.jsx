import { Container } from "./styles";

export function Button({children, color, backgroundColor}) {
    return (
        <Container style={{ backgroundColor, color }}>
            {children}
        </Container>
    )
}