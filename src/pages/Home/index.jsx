import { Container, NewMovie, Content, Cards} from './styles'

import { HiOutlinePlus } from "react-icons/hi";


import { Header } from '../../components/Header'

import { Card } from '../../components/Card'

export function Home() {
    return (
      <Container>
        <Header/>
        <Content>
          <header>
            <h1>Meus filmes</h1>               
            <NewMovie to="/new">
              <HiOutlinePlus size={20} />
              Adicionar filme
            </NewMovie>
          </header>            
            
          <Cards>
            < Card data={ {
                title: 'Interestellar', 
                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                tags: [
                  {id: 1, name: 'Ficção Científica'},
                  {id: 2, name: 'Drama'},    
                  { id: 3, name: 'Família' }     
                ]
              }}/>
            < Card data={ {
                title: 'Interestellar', 
                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                tags: [
                  {id: 1, name: 'Ficção Científica'},
                  {id: 2, name: 'Drama'},    
                  { id: 3, name: 'Família' }     
                ]
              }}/>
            < Card data={ {
                title: 'Interestellar', 
                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                tags: [
                  {id: 1, name: 'Ficção Científica'},
                  {id: 2, name: 'Drama'},    
                  { id: 3, name: 'Família' }     
                ]
              }}/>              
          </Cards>
        </Content>
      </Container>
    )
}
