import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/Fi';
import { Link } from "react-router-dom";


import { Container, Form, Avatar } from "./styles";

import { Input } from '../../compontens/Input';
import { Button } from '../../compontens/Button';


export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Avatar>
                <img 
                    src="https://github.com/rodrigorgtic.png" 
                    alt="Foto do usuário" 
                />
                
                <label 
                    htmlFor="avatar">
                    <FiCamera />
                        
                    <input 
                        id='avatar'
                        type="file"
                         
                    />
                </label>
            </Avatar>

            <Form>
                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />
                
                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Salvar'/>

            </Form>

        </Container>
    );
}