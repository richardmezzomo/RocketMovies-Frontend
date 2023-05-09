import { HiOutlineMail, HiArrowLeft } from "react-icons/hi";
import { FiCamera, FiLock, FiUser} from "react-icons/fi";

import { LinkBack } from '../../components/LinkBack'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <LinkBack to="/"><HiArrowLeft />Voltar</LinkBack>
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

        <Button>Salvar</Button>
      </Form>
    </Container>
  );
}