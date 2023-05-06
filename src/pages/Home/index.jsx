import { Container, NewMovie, Content, Cards} from './styles'

import { HiOutlinePlus } from "react-icons/hi";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home() {
    return (
      <Container>
        <Header/>
          <NewMovie>
            <h1>Meus filmes</h1>               
            <Button><HiOutlinePlus size={20} />Adicionar filme</Button>
          </NewMovie>
        <Content>
          <Cards>
            < Card />
          </Cards>
        </Content>
      </Container>
    )
}
