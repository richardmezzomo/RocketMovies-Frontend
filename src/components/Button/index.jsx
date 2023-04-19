import { Container } from "./styles";

export function Button({value, loading = false, ...rest}) {
    return (
        <Container 
        type="button"
        disabled={loading}
        {...rest}
        >
            { loading ? 'Carregando...' : value }
        </Container>
    )
}