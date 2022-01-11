import React from 'react';
import { ProjectsContainer, Project} from './ProjectsElements';
import CRTOverlay from '../CRTOverlay';

const desc = {
    hctf:
    <>
        <p>
            This is a Haskell library containing general functions for use in
            CTF solution scripts, mainly focusing on number-theoretic
            algorithms, cryptographic algorithms, and abstract algebra.
            It is made with quick extensibility and use inside GHCI in mind.
        </p>
        <p>
            Through the use of this library I hope to break the popular notion
            that CTF cryptography challenges can only be solved using a
            combination of SageMath (a mathematics environment built upon Python)
            and pwntools (a CTF framework that is useful for reducing boilerplate
            to almost nothing in solution scripts for CTFs).
        </p>
        <p>
            This library has the following features, with more to come:
            <ul>
                <li>Abstract algebraic structures implemented as Haskell typeclasses.</li>
                <li>Fields, rings and groups such as the integers modulo a prime, elliptic curves, etc.</li>
                <li>The integer factorization algorithms Pollard's P-1, Pollard's Rho, and Fermat.</li>
                <li>The discrete logarithm algorithms Pohlig-Hellman, Pollard's Rho, and Baby-Step-Giant-Step, all generic over finite cyclic abelian groups.</li>
            </ul>
        </p>
    </>,
    fail2panel:
    <>
        <p>
            This is a web panel for fail2ban, which exposes fail2ban's
            functionality as a REST API using the Python Flask library and
            serves it in a web panel written in Elm.
        </p>
        <p>
            fail2ban is a log analysis tool for Linux servers that goes through
            many different logs such as the syslog and authentication logs
            and scrapes invalid login attempts from them for various services
            such as SSH, http-auth, POP3, SMTP, WordPress, and others. If an
            IP fails a certain amount of login attempts within a certain amount
            of time, they get banned.
        </p>
        <p>
            This panel displays information about the current running fail2ban
            process, and lets you ban IPs, add them to the ignore list, and
            change the per-jail settings like the maximum amount of failed
            password attempts before an IP is banned.
        </p>
    </>,
    haxkell:
    <>
        <p>
            I created a blog in HTML and CSS, using the static site generator
            Hakyll, to document my experiences in information security, mainly
            the completion of CTF challenges, in Haskell. This is particularly
            notable because the vast majority of tools meant for such challenges
            are in either Python, C, or Ruby, so a lot of code must be written
            in order to construct an efficient infosec testing platform in
            Haskell.
        </p>
    </>
}



const ProjectsSection = () => {
    return (
        <ProjectsContainer>
            <CRTOverlay />
            <Project title="Haxkell Blog" link="https://tacopeland.github.io/haxkell" desc={desc.haxkell} secondary />
            <Project title="Fail2Panel" link="https://github.com/tacopeland/fail2panel/tree/python-backend" desc={desc.fail2panel} />
            <Project title="Haskell CTF Crypto" link="https://github.com/tacopeland/haskell-ctf-crypto" desc={desc.hctf} secondary />
        </ProjectsContainer>
    );
};

export default ProjectsSection;
