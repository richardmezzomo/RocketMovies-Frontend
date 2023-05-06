import { Container } from './styles';
import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function Card ({ data, ...rest }) {
  return (
    <Container {...rest}>
        <h1>{data.title}</h1>
        <Rating grade={4} isBigSize={false} style={{ margin: '10px 0' }}/>
        <p>{data.description}</p>
        <footer>
          {
            data.tags.map(tag => <Tag key={tags.id} value={tag.name} />)
          }        
        </footer>
    </Container>
    )    
}