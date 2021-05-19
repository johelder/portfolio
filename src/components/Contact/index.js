import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, } from 'react-icons/fa'
import { Container, Title, Contacts, Github, Linkedin, Instagram, Whatsapp, Thank } from './styles'
import Data from '../../data'

const Contact = () => {

    return (
        <Container >
            <Title>Contato</Title>

            <Contacts>
                <Github> <FaGithub /> </ Github>
                <Linkedin> <FaLinkedinIn /> </ Linkedin>
                <Instagram> <FaInstagram /> </ Instagram>
                <Whatsapp> <FaWhatsapp /> </ Whatsapp>
            </Contacts>

            <Thank>Feito orgulhosamente por { Data.name } 💜</Thank>
        </Container>
    )
};

export default Contact;