import React from 'react';

import { Container, Link, Icon } from './styles';

import novidades from '../../assets/images/novidades.png';
import treinos from '../../assets/images/treinos.png';
import servicos from '../../assets/images/servicos.png';

function Footer(props) {
  return (
      <>
    <Container>
        <Link href="/home">
          <Icon src={novidades} alt="Novidades" />
        </Link>
      <Link href="/trainings">
        <Icon src={treinos} alt="Treinos" />
      </Link>
      <Link href="/plans">
        <Icon src={servicos} alt="Serviços" />
      </Link>
    </Container>
      </>
  );
}

export default Footer;