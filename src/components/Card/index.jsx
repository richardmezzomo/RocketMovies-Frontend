import { Container, Tags } from './styles';
import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function Card () {
  return (
    <Container>
        <h1>Interestellar</h1>
        <Rating grade={4} isBigSize={false} />
        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
        <Tags>
          <Tag className='tag' value="Ficção Científica" />
          <Tag className='tag' value="Drama" />
          <Tag className='tag' value="Família" />
        </Tags>
    </Container>
    )    
}