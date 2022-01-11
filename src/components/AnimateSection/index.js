import React from 'react';
import { AnimateContainer, AnimateRow, AnimateQuery, AnimateButton } from './AnimateElements'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const AnimateSection = () => {
    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['animate']);

    const enableAnimation = () => {
        setCookie('animate', 'true', { path: '/' });
        navigate("/home")
    }

    const disableAnimation = () => {
        setCookie('animate', 'false', { path: '/' });
        navigate("/home")
    }

    return (
        <AnimateContainer>
            <AnimateQuery>
                Enable animations?
            </AnimateQuery>
            <AnimateRow>
                <AnimateButton onClick={enableAnimation}>
                    Yes
                </AnimateButton>
                <AnimateButton onClick={disableAnimation}>
                    No
                </AnimateButton>
            </AnimateRow>
        </AnimateContainer>
    );
};

export default AnimateSection;
