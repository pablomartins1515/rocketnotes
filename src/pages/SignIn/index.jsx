
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from '../../compontens/Input';
import { Button } from '../../compontens/Button';



export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu Login</h2>

                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                >
                </Input>

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                >
                </Input>

                <Button title='Entrar' />

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>

            <Background />

        </Container>
    );
}