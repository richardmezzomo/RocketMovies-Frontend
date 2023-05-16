import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { LinkBack } from '../../components/LinkBack';

import { HiOutlineMail, HiArrowLeft } from "react-icons/hi";
import { FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        < Input 
          placeholder="Nome" 
          type="text"
          icon={FiUser}  
        />

        < Input 
          placeholder="E-mail" 
          type="email"
          icon={HiOutlineMail}  
        />

        < Input 
          placeholder="Senha" 
          type="password"
          icon={FiLock}  
        />
      
        <Button backgroundColor={"#FF859B"} color={"#312E38"}>Cadastrar</Button>
      

        <LinkBack to="#"><HiArrowLeft />Voltar para o login</LinkBack>


        
      </Form>

      <Background />


    </Container>
  );
}