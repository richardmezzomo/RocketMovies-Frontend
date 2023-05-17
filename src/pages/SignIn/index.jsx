import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { LinkBack } from '../../components/LinkBack';

import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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
      
        <Button backgroundColor={"#FF859B"} color={"#312E38"}>Entrar</Button>
      

        <Link to="/register">Criar conta</Link>


        
      </Form>

      <Background />


    </Container>
  );
}