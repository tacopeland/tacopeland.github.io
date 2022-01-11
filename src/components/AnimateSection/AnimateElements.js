import styled from 'styled-components';

export const AnimateContainer = styled.div`
    font-family: VT220;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    padding-left: 60px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const AnimateRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-height: 50vh;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const AnimateQuery = styled.p`
    max-width: 650px;
    font-weight: bold;
    text-align: left;
    font-size: 1.6em;
    color: #fa0;
    padding: 20px 20px;
`;

export const AnimateButton = styled.button`
    color: #fa0;
    font-size: 2rem;
    background: none;
    border: none;
    padding: 20px;
    cursor: pointer;
`;
