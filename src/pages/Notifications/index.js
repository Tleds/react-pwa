import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Container,
  Title,
  List,
  ListItem,
  Row,
  RowTitle,
  RowTime,
  RowDescription,
 } from './styles';

function Notifications() {
  return (
    <>
    <Header back pageTitle={'Notificações'} />
    <Container>
      <Title>Notificações</Title>
      <List >
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime>30 minutos atrás</RowTime>
          </Row>
        </ListItem>
        <ListItem >
          <Row>
            <RowTitle>Novo vídeo no canal do youtube</RowTitle>
          </Row>
          <Row>
            <RowDescription>Como regular a intensidade no treino?</RowDescription>
          </Row>
          <Row>
            <RowTime >30 minutos atrás</RowTime>
          </Row>
        </ListItem>
      </List>
    </Container>
    <Footer />
    </>
  );
}

export default Notifications;