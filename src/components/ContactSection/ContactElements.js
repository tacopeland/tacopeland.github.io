import styled from 'styled-components';

export const ContactContainer = styled.div`
    font-family: VT220;
    background: #000;
    display: flex;
    justify-content: space-around;
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


export const ContactSVG = styled.div`
    height: 200px;
    width: auto;

    svg {
        height: 100%;
    }
`

export const ContactParagraph = styled.p`
    max-width: 650px;
    font-weight: bold;
    text-align: left;
    font-size: 1.6em;
    color: #fa0;
    padding: 20px 20px;
`;

