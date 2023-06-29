import { useState } from 'react'
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './tabPostagem.css'


export default function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Bem-vindo ao nosso blog, um espaço dedicado a explorar a beleza da natureza, mergulhar no emocionante mundo dos jogos, descobrir as últimas novidades em tecnologia e apreciar a riqueza da música. Aqui, unimos esses temas distintos para oferecer uma experiência diversificada aos nossos leitores.
                        <p>
                            Em nossos artigos sobre a natureza, levamos você a uma jornada pelas maravilhas do mundo natural. Compartilhamos curiosidades sobre animais fascinantes, destinos exuberantes e dicas para uma vida mais sustentável. Acreditamos que a natureza é uma fonte infinita de inspiração e bem-estar, e desejamos despertar em nossos leitores um maior cuidado e apreço pelo nosso planeta.

                        </p>
                        <p>
                            No mundo dos games, somos apaixonados por aventuras virtuais. Analisamos os lançamentos mais recentes, fornecemos dicas e truques, e mergulhamos nas narrativas envolventes que os jogos oferecem. Desde os jogos clássicos até as últimas inovações, estamos aqui para manter você atualizado e ajudá-lo a descobrir experiências de jogo emocionantes.
                        </p>
                        <p>
                            A tecnologia é uma parte indispensável de nossas vidas modernas, e estamos sempre de olho nas tendências mais recentes. Apresentamos análises de dispositivos, exploramos avanços científicos e discutimos o impacto da tecnologia em diferentes áreas da sociedade. Queremos informar e inspirar nossos leitores a utilizar a tecnologia de maneira consciente e criativa.
                        </p>
                        <p>
                            Além disso, não poderíamos deixar de lado a música, uma forma de arte universal que nos conecta em níveis profundos. Apresentamos resenhas de álbuns, entrevistas com artistas, e exploramos diferentes gêneros musicais. Queremos compartilhar a paixão pela música e apresentar novos talentos aos nossos leitores.
                        </p>
                        <p>
                            Este blog é um convite para você explorar e desfrutar de um mundo diversificado de conteúdo. Esperamos que você encontre inspiração, entretenimento e informações valiosas enquanto mergulha nos encantos da natureza, mergulha em jogos emocionantes, abraça a tecnologia e se deleita com os diversos sons da música. Bem-vindo ao nosso universo!
                        </p></Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}