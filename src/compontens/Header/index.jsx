import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";




export function Header () {
    return (
        <Container>
            <Profile to='./profile'>
                <img src="https://github.com/rodrigorgtic.png"
                     alt="Foto do Usuário"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>                 
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>                           
        </Container>
    );
}