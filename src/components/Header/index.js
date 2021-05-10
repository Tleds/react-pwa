import React, { useState } from 'react';

import { Container, LeftIcon, RightIcon, PageTitle, Link, Button, Modal } from './styles';

import burgerMenuIcon from '../../assets/images/burger_menu_button.png';
import backArrow from '../../assets/images/back_arrow.png';
import notifications from '../../assets/images/notifications.png';

function Header(props) {

  const [open, setOpen] = useState(false);

  const handleLogout = ()=>{
    localStorage.setItem('token',undefined);
    window.location = '/';
    return
  }
  return (
      <>
        <Modal open={open}>
          <PageTitle>{localStorage.getItem('name') || 'Tiago'}</PageTitle>
          <Button
            onClick={handleLogout}
          >Sair
          </Button>
        </Modal>
        <Container>
          {props.back ? (
            <>
            <Link href="/home">
              <LeftIcon src={backArrow} alt="Voltar" />
            </Link>
            </>
          ) : (
            <>
            <Button
              onClick={()=> setOpen(!open)}
            >
              <LeftIcon src={burgerMenuIcon} alt="Menu" />
            </Button>
            </>
            )}
          <PageTitle>{props.pageTitle}</PageTitle>
          <Button
            onClick={()=> window.location = '/notifications'}
          >
            <RightIcon src={notifications} alt="Notificação" />
          </Button>
        </Container>  
      </>
  );
}

export default Header;