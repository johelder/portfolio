import React from 'react';
import { Link } from 'react-scroll';
import { FaAngleDown, FaGithub } from 'react-icons/fa';
import { Container, Apresentation, Name, Dev, Button, Github, ArrowDown, RocketContainer, RocketImg, FireImg } from './styles';
import Clouds from '../../images/mobile-clouds.png';
import Rocket from '../../images/rocket.png';
import Fire from '../../images/fire.png';
import Data from '../../data';

const Main = () => {
    return (
        <Container>
            <Apresentation>
                <Name>{ Data.name }</Name>
                <Dev>{ Data.profession }</Dev>

                <Button>
                    <FaGithub />
                    <Github>Github</Github>
                </Button>
            </Apresentation>

            <ArrowDown >
                <Link to="about" duration={ 1000 } spy={ true } offset={ -100 } smooth={ true } activeClass= "active">
                    <FaAngleDown />
                </Link>
            </ArrowDown>

            <img src={ Clouds } alt="Nuvens" />

            <RocketContainer>
                <RocketImg>
                    <img src={ Rocket } alt="Foguete"/>
                </RocketImg>
                <FireImg>
                    <img src={ Fire } alt="Fogo" />
                </FireImg>
            </RocketContainer>
        </Container>
    )
}

export default Main