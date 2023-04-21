import { Container } from './styles'

import { Header } from '../../components/Header' // Importa o componente Header
import { LinkBack } from '../../components/LinkBack' // Importa o componente LinkBack

export function Details() {
  return (
    <Container>
      <Header/>

      <LinkBack to="/">Voltar</LinkBack>
       
    </Container>
  )
}