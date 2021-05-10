import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Row, Title } from './styles';

function TrainingsDetails() {
  return (
    <>
    <Header back pageTitle={'Detalhes do treino'} />
    <Container>
    <Row>
        <Title >Hipertrofia - Iniciante - Masculino - Ficha 1</Title>
    </Row>
    </Container>
    <Footer />
    </>
  );
}

export default TrainingsDetails;