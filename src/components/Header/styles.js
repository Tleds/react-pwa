import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto;
    padding: 0px 10px;
`;
export const LeftIcon = styled.img`
    height: auto;
    width: 28px;
`;
export const PageTitle = styled.h3``;
export const RightIcon = styled.img`
    height: auto;
    width: 28px;
`;
export const Link = styled.a`
    text-decoration: none;
    color: #000;
`;
export const Button = styled.button`
    background-color: Transparent;
    border: none;
    cursor: pointer;
`;
export const Modal = styled.dialog`
    margin: 150px 0px 0px 600px;
    padding: 20px 50px;
    border-radius: 15px;
    border: 1px solid #000;
    text-align: center;
`;