import React from 'react';
import { Formik } from 'formik';

import { 
  Container,
  Logo,
  RegisterText,
  RegisterLink,
  Input,
  Label,
  Button,
  ForgotPasswordText,
  ForgotPasswordLink
} from './styles';

import GlobalStyle from '../../styles/globalStyle';

import api from '../../services/api';

import logo from '../../assets/images/logo_branca.png';

function Acess(props) {
  return (
    <>
    <GlobalStyle />
    <Formik
        initialValues={{
          email:'',
          password:'',
        }}
        onSubmit={ async (values, { setSubmitting }) => {
          const {
            email,
            password
          } = values;

          const response = await api.post('/session_user',{
            email,
            password,
          });

          if(response.status === 200){
            localStorage.setItem('token', response.data.token);
            props.history.push('/home');
            return
          }

          if(response.status >= 400 && response.status < 500){
            alert(response.data.message[0].message || response.data.message);
            return
          }

          if(response.status >= 500){
            alert(response.data.message);
            return
          }
        }}
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         handleBlur,
         isSubmitting,
         /* and other goodies */
       }) => (
         <>
         <form onSubmit={handleSubmit}>
    <Container>
    <Logo class="logo" src={logo} alt="Logo"/>
    <RegisterText >Ainda não tem uma conta? 
      <RegisterLink class="registerLink" href='/register'>Inscreva-se</RegisterLink>
    </RegisterText>
    <Label 
      class="emailLabel"
    >
      E-mail:
    </Label>
    <Input 
      id="email"
      type="email"
      onChange={handleChange}
    />
    <Label
      class="passwordLabel"
    >
      Senha:
    </Label>
    <Input 
      id="password"
      type="password" 
      onChange={handleChange}
    />
    <ForgotPasswordText class="forgotPasswordText">Esqueceu a senha?
      <ForgotPasswordLink href="/forgot_password" class="forgotPasswordLink">Clique aqui!</ForgotPasswordLink>
    </ForgotPasswordText>
    <Button class="loginButton" onclick="handleLogin()">Entrar</Button>
    <Button class="loginButtonGoogle">Entrar com Google</Button>
    <Button class="loginButtonFacebook">Entrar com Facebook</Button>
    </Container>
    </form>
    </>
          )}
        </Formik>
    </>
  );
}

export default Acess;