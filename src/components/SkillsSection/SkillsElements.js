import styled from 'styled-components';

export const SkillsContainer = styled.div`
    font-family: VT220;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 60px;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 1;
`;

export const SkillsBg = styled.div`
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

export const SkillsLine = styled.div`
    position: absolute:
    top: 0;
    width: 100%;
    height: 15px;
    background-color: #ffffff10;
    z-index: 8;
    transform: translateY(-40px);
`

export const SkillsTitle = styled.h1`
    color: #fa0;
    font-size: 3.5rem;
    padding: 0.8em 0;

    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
    }

    @media screen and (min-width: 2500px) {
        font-size: 5rem;
    }
`

export const SkillsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-height: 50vh;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const SkillsName = styled.h2`
    max-width: 650px;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;
    color: #fa0;
    padding: 20px 20px;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }

    @media screen and (min-width: 2500px) {
        font-size: 4.5rem;
    }
`;

export const SkillsSVG = styled.div`
    max-height: 40vh;
    max-width: 90%;
    width: auto;
    aspect-ratio: 1 / 1;

    @media screen and (min-width: 2500px) {
        max-height: 550px;
    }

    svg {
        stroke-dasharray: 500px;
        height: 100%;
    }
`

export const NextButton = styled.button`
    color: #fa0;
    font-size: 2rem;
    background: none;
    border: none;
    padding: 20px 0;
    cursor: pointer;
`;
