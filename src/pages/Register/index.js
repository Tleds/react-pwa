import React from 'react';
import { Formik } from 'formik';
import { 
  Container, 
  Logo, 
  Label, 
  AccessLink, 
  AccessText,
  Input,
  Button
} 
from './styles';
import GlobalStyle from '../../styles/globalStyle';
import api from '../../services/api';
import logo from '../../assets/images/logo_branca.png';

function Register(props) {
  return (
    <>
    <GlobalStyle />
      <Formik
        initialValues={{
          name:'',
          email:'',
          password:'',
          confirmPassword: ''
        }}
        onSubmit={ async (values, { setSubmitting }) => {
          const {
            name,
            email,
            password,
          } = values;

          const response = await api.post('/users',{
            name,
            email,
            password,
          });

          if(response.status === 200){
            alert('Cadastrado com sucesso!');
            localStorage.setItem('token', response.data.token);
            props.history.push('/home');
            return
          }

          if(response.status >= 400 && response.status < 500){
            alert(response.data.message);
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
      <Logo class="logo" src={logo}/>
      <AccessText class="accessText">Já tem uma conta? <AccessLink class="accessText" href='/'>Acesse</AccessLink></AccessText>
      <Label
        class="nameLabel"
      >
        Nome:
      </Label>
      <Input 
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <Label
        class="emailLabel"
      >
        E-mail:
      </Label>
      <Input 
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={values.email}
       />
      <Label
        class="passwordLabel"
      >
        Senha:
      </Label>
      <Input 
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <Label
        class="confirmationPasswordLabel"
      >
        Confirmar Senha:
      </Label>
      <Input 
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={handleChange}
        value={values.confirmPassword}
      />
      <Button
        onClick={handleSubmit}
        class="loginButton"
      >Cadastrar</Button>
      <Button
        class="loginButtonGoogle"
      >Cadastrar com Google
    </Button>
      <Button
        class="loginButtonFacebook"
      >Cadastrar com Facebook
    </Button>

    </Container>
    </form>
    </>
          )}
        </Formik>
    </>
  );

}

export default Register;