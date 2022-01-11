import styled from 'styled-components';

export const CRTBg = styled.div`
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

export const CRTLine = styled.div`
    position: absolute:
    top: 0;
    width: 100%;
    height: 15px;
    background-color: #ffffff10;
    z-index: 8;
    transform: translateY(-40px);
`
