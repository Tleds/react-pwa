import styled from 'styled-components';

export const Container = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;
export const Title = styled.h3``;
export const List = styled.li`
    list-style: none;
`;
export const ListItem = styled.ul`
    list-style: none;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 500px;
`;
export const RowTitle = styled.span`
    font-size: 1em;
`;
export const RowTime = styled.span`
    font-size: 0.8em;
`;
export const RowDescription = styled.p``;
