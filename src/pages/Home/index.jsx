import { Container, NewMovie, Content, Cards} from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home() {
    return (
      <Container>
        <Header/>
        <Content>
          <NewMovie>
            <h1>Meus filmes</h1>
            <Button value="Adicionar filme"></Button>
          </NewMovie>
          <Cards>
            <Card /> 
            <Card /> 
            <Card /> 
          </Cards>
        </Content>
      </Container>
    )
}
