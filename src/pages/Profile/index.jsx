import { HiOutlineMail, HiArrowLeft } from "react-icons/hi";
import { FiCamera, FiLock, FiUser} from "react-icons/fi";

import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/"><HiArrowLeft />Voltar</Link>
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/richardmezzomo.png" 
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input 
          placeholder="Nome" 
          type="text"
          icon={FiUser}      
        />

        < Input 
          placeholder="E-mail" 
          type="email"
          icon={HiOutlineMail}  
        />

        <Input 
          placeholder="Senha atual" 
          type="password"
          icon={FiLock}  
        />

        <Input 
          placeholder="Nova senha" 
          type="password"
          icon={FiLock}  
        />

        <Button backgroundColor={"#FF859B"} color={"#312E38"}>Salvar</Button>
      </Form>
    </Container>
  );
}