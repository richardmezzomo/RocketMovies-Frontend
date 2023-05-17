import { Container, Profile, Search } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <div>
          <strong>Richard Mezzomo</strong>
          <a href=""><span>sair</span></a>
        </div>
        <img src="https://github.com/richardmezzomo.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  )
}