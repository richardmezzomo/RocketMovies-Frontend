import { Container } from "./styles";
import { IoTimeOutline } from "react-icons/io5";

export function CreatedAt ({ children, date }) {
  return (
    <Container>
      <img src="https://github.com/richardmezzomo.png" alt="" />        
      <p>Por Richard Mezzomo</p>
      <div><IoTimeOutline /></div>
      <p>23/05/2023</p>
    </Container>
  )
}