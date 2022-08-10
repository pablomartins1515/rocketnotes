import { FiPlus, FiSearch} from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../compontens/Header";
import { ButtonText } from "../../compontens/ButtonText";
import { Note } from "../../compontens/Note";
import { Input } from "../../compontens/Input";
import { Section} from "../../compontens/Section"


export function Home() {
    return (
        <Container>
           <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            < Menu>
                <li><ButtonText title="Todos" isActive></ButtonText></li>
                <li><ButtonText title="ReactJs"></ButtonText></li>
                <li><ButtonText title="NodeJS"></ButtonText></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id:'1', name: 'react'},
                            { id:'2', name: 'rocketseat'},                            
                        ]
                    }}/>                    
                </Section>
            </Content>

            <NewNote to='./new'>
                <FiPlus/>
                Criar Nota

            </NewNote>

         
        </Container>       
    );
}