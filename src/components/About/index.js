import React from 'react';
import { Container, Title, AboutContainer, Avatar, AboutContent } from './styles';

import Data from '../../data'

const About = () => {
    return (
        <Container>
            <Title>Sobre mim</Title>

            <AboutContainer>
                <Avatar src={ Data.avatar } alt="Perfil" />

                <AboutContent>{ Data.about }</AboutContent>
            </AboutContainer>
        </Container>
    )
};

export default About;