import React from 'react';
import { ContactContainer, ContactSVG, ContactParagraph } from './ContactElements';
import { ReactComponent as Person } from '../../images/person.svg'

const ContactSection = () => {
    return (
        <ContactContainer>
            <ContactSVG><Person /></ContactSVG>
            <ContactParagraph>Want me to build you a website or software solution? Send me an email at <a href="mailto:timcopeland1111@gmail.com">timcopeland1111@gmail.com</a> and I should get back to you soon.</ContactParagraph>
        </ContactContainer>
    );
};

export default ContactSection;
