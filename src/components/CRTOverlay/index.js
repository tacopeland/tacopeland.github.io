import React from 'react';
import Anime from 'react-anime';
import { CRTBg, CRTLine } from './CRTElements';
import { ReactComponent as Person } from '../../images/person.svg'

const CRTOverlay = () => {
    return (
        <CRTBg>
            <Anime duration={8000}
                   easing="linear"
                   translateY={["-10vh", "110vh"]}
                   loop={true}>
                <CRTLine>
                </CRTLine>
            </Anime>
        </CRTBg>
    );
};

export default CRTOverlay;
