import styled, { createGlobalStyle } from 'styled-components';

export const LocalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`;
export const Container = styled.div`
    max-width: 600px;
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
    justify-content: space-around;
`
export const Image = styled.img`
    height: 80px;
    width: auto;
    padding-left: 20px;
`;
export const Title = styled.strong`
    font-size: 16px;
    padding: 5px 5px 5px 0px;
`;
export const Text = styled.p`
font-size: 12px;
padding: 5px 5px 5px 0px;
`;
export const List = styled.li`
list-style: none;
`;
