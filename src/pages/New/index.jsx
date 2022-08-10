
import { Container, Form, FormH } from "./styles";
import { Link } from "react-router-dom";

import { Header } from "../../compontens/Header";
import { Input } from  "../../compontens/Input";
import { Textarea } from  "../../compontens/Textarea";
import { NoteItem } from  "../../compontens/NoteItem";
import { Section } from  "../../compontens/Section";
import { Button } from "../../compontens/Button";




export function New() {
    return (
        <Container>
           <Header />

           <main>
                <FormH>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                </FormH>

                <Form>
                    <Input placeholder='Título' />
                    <Textarea  placeholder='Observações'/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew  placeholder="Novo Link"/>  
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew  placeholder=" Nova tag"/>
                        </div>                          
                    </Section>
                    
                    <Button title='Salvar'/>
                </Form>
                                
            </main>


                   
        </Container>       
    );
}