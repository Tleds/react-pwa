import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Container,
  Title,
  List,
  Row,
  ListRow,
  Button,
  ListButton,
} from './styles';



function Trainings(props) {

  const handleBuy = async () =>{

  }

  return (
    <>
    <Header pageTitle={'Treinamentos'} />
    <Container>
      <Title>Programas de treino</Title>
      <List>
        <ListRow >
          <Row>
            <ListButton  
            onClick={()=> props.history.push('/training_details') }
            >
              Hipertrofia - Iniciante - Masculino - Ficha 1
            </ListButton>
          </Row>
        </ListRow>
        <ListRow >
          <Row>
            <ListButton 
              onClick={()=> props.history.push('/training_details') }
            >
              Hipertrofia - Intermediario - Masculino - Ficha 1
            
            </ListButton>
          </Row>
        </ListRow>
      </List>
      <Button 
        onClick={handleBuy}
      >Comprar Treinos
      </Button>
    </Container>
    <Footer />
    </>
  );
}

export default Trainings;