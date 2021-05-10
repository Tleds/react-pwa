import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, LocalStyle, CongratulationsDiv, Button, Paragraph } from './styles';

function PlansFinal(props) {
  return (
    <>
    <LocalStyle />
    <Header pageTitle={'Obrigado!'}/>
    <Container>
      <CongratulationsDiv>
        <Paragraph>Parabéns!!!</Paragraph>
        <Paragraph>Seu Treino vai trazer muito mais resultado a partir de agora</Paragraph>
        <Paragraph>
          Lembre-se que a periodização de treinos é essencial para um resultado duradouro, 
          logo aconselhamos que troque seu treino a cada 30 dias.
        </Paragraph>
        <Paragraph>Seu programa de treino já está disponível no menu “Treinos”.</Paragraph>
      </CongratulationsDiv>
      <Button
        onClick={()=> props.history.push('/trainings')}
      >Ir para treinos</Button>
    </Container>
      <Footer />
    </>
  );
}

export default PlansFinal;