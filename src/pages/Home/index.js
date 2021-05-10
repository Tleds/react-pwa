import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { 
  LocalStyle, 
  Container, 
  Row, 
  Image,
  Title, 
  Text, 
  List
} from './styles';

import videoExemplo from '../../assets/images/video_exemplo.png';

function Home() {
  return (
    <>
    <LocalStyle />
    <Header pageTitle={'Página inicial'} />
    <Container>
      <h3>Novidades</h3>
      <List>
        <ul>
          <Row>
            <div>
              <strong class="rowTitle">Como regular a intensidade no treino</strong>
              <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text>
            </div>
            <Image src={videoExemplo} alt="Vídeo" />
          </Row>
        </ul>
        <ul>
          <Row>
            <div>
              <Title >Como regular a intensidade no treino</Title>
              <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text>
            </div>
            <Image src={videoExemplo} alt="Vídeo" />
          </Row>
        </ul>
        <ul>
          <Row>
            <div>
              <Title >Como regular a intensidade no treino</Title>
              <Text>No video de hoje eu faço o treino do meu aluno Diego e ensino ele como mehorar a intensidade de um treino intermediario básico. 
                Deixe nos comentarios suas dúvidas. 
              </Text>
            </div>
            <Image src={videoExemplo} alt="Vídeo" />
          </Row>
        </ul>
      </List>
    </Container>
      <Footer />
    </>
  );
}

export default Home;