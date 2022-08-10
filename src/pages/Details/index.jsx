
import { Container, Links, Content } from "./styles";

import { Tag } from "../../compontens/Tag";
import { Button } from "../../compontens/Button";
import { Header } from "../../compontens/Header";
import { Section } from "../../compontens/Section";
import { ButtonText } from "../../compontens/ButtonText";




export function Details() {
    return (
        <Container>
            <Header /> 

            <main>
                <Content>              
                    <ButtonText title="Excluir nota"/> 
                    
                        <h1>
                            Introdução ao React
                        </h1>
                        
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam illo rem 
                            itaque ipsam sequi consequatur cumque veritatis assumenda dolor alias tempora 
                            molestias maxime autem, consequuntur uod praesentium! Iure, beatae. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Saepe quam illo rem itaque ipsam 
                            sequi consequatur cumque veritatis assumenda dolor alias tempora molestias 
                            maxime autem, consequuntur quod praesentium! Iure, beatae.
                        </p>

                
                    <Section title='Links Úteis'>
                        <Links>
                            <li><a href="#">https://www.rocketset.com.br/</a></li>
                            <li><a href="#">https://www.rocketset.com.br/</a></li>                    
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="Express" />
                        <Tag title="NodeJs" />

                    </Section>

                    <Button title="Voltar" />
                    
                    
                </Content>          
            </main>            
        </Container>        
    )
}