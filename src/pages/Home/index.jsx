import { Container, NewMovie, Content} from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Home() {
    return (
        <Container>
            <Header/>
            <NewMovie>
                <h1>Meus filmes</h1>
                <Button value="Adicionar filme" />
            </NewMovie>
            <Content>
                
            </Content>
        </Container>
    )
}
