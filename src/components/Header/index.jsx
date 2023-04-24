import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" name="search" id="search" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Richard Mezzomo</strong>
          <a href=""><span>sair</span></a>
        </div>

        <img src="https://github.com/richardmezzomo.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  )
}