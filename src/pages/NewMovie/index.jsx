import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Highlighter } from "../../components/Highlighter";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import { HiArrowLeft } from "react-icons/hi"; 

export function NewMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"><HiArrowLeft />Voltar</Link>
            <h1>Novo filme</h1>
          </header>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observação" />
      
          <p>Marcadores</p>   
          <div className="tags">
            <Highlighter  value="Interestellar"/>
            <Highlighter isNew placeholder="Novo marcador" />
          </div>         
          
          <div className="buttons">
            <Button backgroundColor={"#0D0C0F"} color={"#FF859B"}>Excluir filme</Button>
            <Button backgroundColor={"#FF859B"} color={"#312E38"}>Salvar alterações</Button>
          </div>
        </Form>
      </main>
    </Container>
  );
}