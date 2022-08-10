
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from '../../compontens/Input';
import { Button } from '../../compontens/Button';



export function SignUp() {
    return (
        <Container>

            <Background />    
            
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                >
                </Input>

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

                <Button title='Criar conta' />

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>

            

        </Container>
    );
}