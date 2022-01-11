import React from 'react';
import Typing from 'react-typing-animation';
import { DateTime } from 'luxon';
import { useCookies } from 'react-cookie';

import { IntroContainer, IntroContent, IntroCursor } from './IntroElements';
import CRTOverlay from '../CRTOverlay';


const now = DateTime.now().setLocale('en').toFormat('EEE MMM dd TTT kkkk');

const IntroSection = () => {
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(['animate']);

    var animated = cookies.animate === "true";

    var textContent = 
        animated ?
            <Typing cursor=<IntroCursor /> className="inline" loop={true}>
                <Typing.Delay ms={500} />
                <Typing.Speed ms={30} />
                # Hello, I am Timothy Copeland, a freelance programmer and web developer.<br />
                <Typing.Speed ms={0} />
                timothy[2]&nbsp;
                <Typing.Delay ms={500} />
                <Typing.Speed ms={30} />
                # I provide solutions that are scalable, secure, and speedy.<br />
                <Typing.Speed ms={0} />
                timothy[3]&nbsp;
                <Typing.Delay ms={500} />
                <Typing.Speed ms={30} />
                # My websites aren't just pretty, they *work*.
                <Typing.Delay ms={10000} />
                <Typing.Speed ms={0} />
                <br />timothy[4]&nbsp;
                <Typing.Delay ms={500} />
                <Typing.Speed ms={30} />
                clear
                <Typing.Reset delay={1000} />
            </Typing>
        : <>
            # Hello, I am Timothy Copeland, a freelance programmer and web developer.<br />
            timothy[2] # I provide solutions that are scalable, secure, and speedy.<br />
            timothy[3] # My websites aren't just pretty, they *work*.
        </>;

    return (
        <IntroContainer>
            <CRTOverlay />
            <IntroContent>
                2.11 BSD UNIX (pdp11) (console)<br /><br />
                login: timothy<br />
                password:<br />
                Last login: Tue Sep 28 16:42:09 on console<br />
                2.11 BSD UNIX #11: Sep 30 16:28:33 AEST 2021<br />
                {now}<br /><br />
                timothy[1]&nbsp;{textContent}
            </IntroContent>
        </IntroContainer>
    );
};

export default IntroSection;
