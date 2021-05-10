import React, {useState} from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  LocalStyle,
  Container,
  VerticalRow,
  Button,
  Title
} from './styles';

function Plans() {

  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [sex, setSex] = useState('');
  const [trainingProgram, setTrainingProgram] = useState('');

  const handleBuy = ()=>{
    console.log(goal, level, sex, trainingProgram)
    return
  }
  return (
  <>
  <LocalStyle />
  <Header pageTitle={'Planos'} />
  <Container>
      <Title>Selecione seu objetivo:</Title>
      <VerticalRow>
        <Button
          onClick={() => setGoal('Hipertrofia')}
        >Hipertrofia</Button>
        <Button
          onClick={() => setGoal('Emagrecimento')}
        >Emagrecimento</Button>
      </VerticalRow>

        <Title>Selecione seu nível:</Title>
        <Button
          onClick={() => setLevel('Iniciante')}
        >Iniciante</Button>
        <Button
          onClick={() => setLevel('Intermediário')}
        >Intermediario</Button>
        <Button
          onClick={() => setLevel('Avançado')}
        >Avançado</Button>

        <Title>Qual é o seu sexo?</Title>
        <Button
          onClick={() => setSex('M')}
        >Masculino</Button>
        <Button
          onClick={() => setSex('F')}
        >Feminino</Button>

        <Title>Selecione seu programa de treino:</Title>
        <Button
          onClick={() => setTrainingProgram('Ficha 1')}
        >Ficha 1</Button>
        <Button 
          class="buyButton"
          onclick={handleBuy}
        >Comprar</Button>
  </Container>
  <Footer />
  </>
  );
}

export default Plans;