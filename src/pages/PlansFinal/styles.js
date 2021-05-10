import styled, { createGlobalStyle } from 'styled-components';

export const LocalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
`;
export const CongratulationsDiv = styled.div`
    font-size: 1.2em;
    text-align: center;
    font-weight: bold;
`;
export const Button = styled.button`
    height: 40px;
    width: 200px;
    background: #C4C4C4;
    font-family: Roboto;
    font-size: 1em;
    font-style: normal;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
`;

export const Paragraph = styled.p``;