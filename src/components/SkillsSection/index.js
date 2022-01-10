import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import { SkillsContainer, SkillsRow, SkillsTitle, SkillsName, SkillsSVG } from './SkillsElements';
import { ReactComponent as HaskellLogo } from '../../images/Haskell-Logo.svg'
import { ReactComponent as ElmLogo } from '../../images/Elm-Logo.svg'
import { ReactComponent as PythonLogo } from '../../images/Python-Logo.svg'
import { ReactComponent as ReactLogo } from '../../images/React-Logo.svg'
import { ReactComponent as KeyIcon } from '../../images/key.svg'


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


const SkillsSection = () => {
    const [counter, setCounter] = useState(0);
    const [showSkill, setShowSkill] = useState(true);
    var timer;

    const transition = () => {
        setShowSkill(false);
        setTimeout(() => {
            setCounter((counter + 1) % skills.length);
            setShowSkill(true);
        }, 2000);
    }

    useEffect(() => {
        const interval = setInterval(transition, 4000);
        return () => clearInterval(interval);
    })

    return (
        <>
            <SkillsContainer>
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
        </>
    );
};

/*
                */

export default SkillsSection;
