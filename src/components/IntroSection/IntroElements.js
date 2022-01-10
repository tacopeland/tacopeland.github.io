import styled, { keyframes } from 'styled-components';

export const IntroContainer = styled.div`
    font-family: VT220;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;

`

export const IntroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 10;
    background-size: 100% 3px, 2px 100%;
    pointer-events: none;
`

export const IntroLine = styled.div`
    position: absolute:
    top: 0;
    width: 100%;
    height: 15px;
    background-color: #ffffff10;
    z-index: 8;
    transform: translateY(-40px);
`


/*
export const IntroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IntroP = styled.p`
    color: #ffaa00;
    font-size: 24px;
    text-align: left;
    max-width: 700px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
*/

export const IntroContent = styled.div`
    position: absolute;
    color: #ffaa00;
    font-size: 28px;
    text-align: left;
    width: 100%;
    padding-left: 70px;
    bottom: 40%;

    @media screen and (min-width: 2000px) {
        font-size: 48px;
        padding-left: 30%;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const blink = keyframes`
    from, to {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`;

export const IntroCursor = styled.span`
    background-color: #ffaa00;
    font-size: 1em;
    padding-left: 12px;
    animation: ${blink} 1s step-end infinite;
`;
