import styled from 'styled-components';

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
    justify-content: space-around;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 3px;
    max-width: 500px;
`;
export const Title = styled.div`
    padding: 10px;
    font-size: 0.9em;
`;