import styled, { createGlobalStyle } from 'styled-components';

export const LocalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`;
export const Container = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 700px;
    background: #FFFFFF;
    border-radius: 3px;
    padding: 10px;
`;
export const Link = styled.a`
    text-decoration: none;
    color: #000;
`;
export const Button = styled.button`
    height: 40px;
    max-width: 200px;
    padding: 10px;
    background: #C4C4C4;
    font-family: Roboto;
    font-size: 1em;
    font-style: normal;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
`;

export const ListButton = styled.button`
    height: 40px;
    max-width: 400px;
    padding: 10px;
    background: #C4C4C4;
    font-family: Roboto;
    font-size: 0.9em;
    font-style: normal;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
`;

export const Title = styled.h3``;
export const List = styled.li`
    list-style: none;
`;
export const ListRow = styled.li`
    list-style: none;
`;