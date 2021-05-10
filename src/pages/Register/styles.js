import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin: 0 auto;
`;

export const Logo = styled.img`
    height: auto;
    width: 300px;
`;

export const AccessText = styled.span`
    color: #FFF;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const Input = styled.input`
    height: 45px;
    width: 275px;
    border-radius: 12px;
    background: #C4C4C4;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
`;
export const AccessLink = styled.a`
    text-decoration: none;
    color: white;
    font-size: 16px; 
`;
export const Label = styled.label`
    color:#FFF;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
`;
export const Button = styled.button`
    cursor:pointer;
    height: 40px;
    width: 200px;
    background: #C4C4C4;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
`;

export const ForgotPasswordText = styled.p`
    color: #FFF;
    font-size: 14px;
    margin:10px;
`;
export const ForgotPasswordLink = styled.a`
    color: #FFF;
    font-size: 16px;
`;