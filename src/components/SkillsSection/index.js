import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { CSSTransition } from 'react-transition-group';
import { SkillsContainer, SkillsRow, SkillsTitle, SkillsName, SkillsSVG, NextButton } from './SkillsElements';
import Anime from 'react-anime';
import { ReactComponent as HaskellLogo } from '../../images/Haskell-Logo.svg'
import { ReactComponent as ElmLogo } from '../../images/Elm-Logo.svg'
import { ReactComponent as PythonLogo } from '../../images/Python-Logo.svg'
import { ReactComponent as ReactLogo } from '../../images/React-Logo.svg'
import { ReactComponent as KeyIcon } from '../../images/key.svg'
import CRTOverlay from '../CRTOverlay';


const skills = [[<SkillsSVG className="skill-transition-enter"><KeyIcon /></SkillsSVG>,
                <SkillsName className="skill-transition-enter">Cryptography</SkillsName>],
               [<SkillsName className="skill-transition-enter">Elm</SkillsName>,
                <SkillsSVG className="skill-transition-enter"><ElmLogo /></SkillsSVG>],
               [<SkillsSVG className="skill-transition-enter"><HaskellLogo /></SkillsSVG>,
               <SkillsName className="skill-transition-enter">Haskell</SkillsName>],
               [<SkillsName className="skill-transition-enter">Python</SkillsName>,
                <SkillsSVG className="skill-transition-enter"><PythonLogo /></SkillsSVG>],
               [<SkillsSVG className="skill-transition-enter"><ReactLogo /></SkillsSVG>,
                <SkillsName className="skill-transition-enter">ReactJS</SkillsName>]];


const skillsStatic = [[<SkillsSVG><KeyIcon /></SkillsSVG>,
                <SkillsName>Cryptography</SkillsName>],
               [<SkillsName>Elm</SkillsName>,
                <SkillsSVG><ElmLogo /></SkillsSVG>],
               [<SkillsSVG><HaskellLogo /></SkillsSVG>,
               <SkillsName>Haskell</SkillsName>],
               [<SkillsName>Python</SkillsName>,
                <SkillsSVG><PythonLogo /></SkillsSVG>],
               [<SkillsSVG><ReactLogo /></SkillsSVG>,
                <SkillsName>ReactJS</SkillsName>]];


const SkillsSection = () => {
    const [counter, setCounter] = useState(0);
    const [showSkill, setShowSkill] = useState(true);

    const [cookies, setCookie] = useCookies(['animate']);
    var animated = cookies.animate === "true";

    const transition = () => {
        if (animated) {
            setShowSkill(false);
            setTimeout(() => {
                setCounter((counter + 1) % skills.length);
                setShowSkill(true);
            }, 1000);
        } else {
            setCounter((counter + 1) % skills.length);
        }
    };

    useEffect(() => {
        if (animated) {
            const interval = setInterval(transition, 2000);
            return () => clearInterval(interval);
        }
    });

    let animatedSkills =
        <>
            <SkillsContainer>
                <CRTOverlay />
                <SkillsTitle>I am skilled in</SkillsTitle>
                <SkillsRow>
                    <CSSTransition
                        key={1}
                        in={showSkill}
                        timeout={0}
                        classNames="skill-transition"
                        appear
                    >
                        {skills[counter][0]}
                    </CSSTransition>
                    <CSSTransition
                        key={2}
                        in={showSkill}
                        timeout={0}
                        classNames="skill-transition"
                        appear
                    >
                        {skills[counter][1]}
                    </CSSTransition>
                </SkillsRow>
            </SkillsContainer>
        </>;

    let staticSkills =
        <>
            <SkillsContainer>
                <CRTOverlay />
                <SkillsTitle>I am skilled in</SkillsTitle>
                <SkillsRow>
                    {skillsStatic[counter][0]}
                    {skillsStatic[counter][1]}
                </SkillsRow>
                <SkillsRow>
                    <NextButton onClick={transition}>Next -></NextButton>
                </SkillsRow>
            </SkillsContainer>
        </>;
    return animated ? animatedSkills : staticSkills;
};

/*
                */

export default SkillsSection;
