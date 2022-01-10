import React from 'react';
import Typing from 'react-typing-animation';
import Anime from 'react-anime';
import { DateTime } from 'luxon';

import { IntroContainer, IntroBg, IntroLine, IntroContent, IntroCursor } from './IntroElements';


const now = DateTime.now().setLocale('en').toFormat('EEE MMM dd TTT kkkk');

const IntroSection = () => {
    return (
        <IntroContainer>
            <IntroBg>
                <Anime duration={8000}
                       easing="linear"
                       translateY={["-10vh", "110vh"]}
                       loop={true}>
                    <IntroLine>
                    </IntroLine>
                </Anime>
            </IntroBg>
            <IntroContent>
                2.11 BSD UNIX (pdp11) (console)<br /><br />
                login: timothy<br />
                password:<br />
                Last login: Tue Sep 28 16:42:09 on console<br />
                2.11 BSD UNIX #11: Sep 30 16:28:33 AEST 2021<br />
                {now}<br /><br />
                timothy[1]&nbsp;
                <Typing cursor=<IntroCursor /> className="inline" loop={true}>
                    <Typing.Delay ms={1500} />
                    # Hello, I am Timothy Copeland, a freelance programmer and web developer.<br />
                    <Typing.Speed ms={0} />
                    timothy[2]&nbsp;
                    <Typing.Delay ms={500} />
                    <Typing.Speed ms={50} />
                    # I provide solutions that are scalable, secure, and speedy.<br />
                    <Typing.Speed ms={0} />
                    timothy[3]&nbsp;
                    <Typing.Delay ms={500} />
                    <Typing.Speed ms={50} />
                    # My websites aren't simply pretty; they *work*.
                    <Typing.Delay ms={10000} />
                    <Typing.Speed ms={0} />
                    <br />timothy[4]&nbsp;
                    <Typing.Delay ms={500} />
                    <Typing.Speed ms={50} />
                    clear
                    <Typing.Reset delay={1000} />
                </Typing>
            </IntroContent>
        </IntroContainer>
    );
};

export default IntroSection;
