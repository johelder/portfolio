import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

import { NavBar, IconMenu, NavElements, Element, MenuHamburguer, One, Two, Three} from './styles';

export default class Nav extends Component {
    
    state = {
        mobile: false
    }

    handleMenu = () => {

        const { mobile } = this.state;

        mobile ? 
        this.setState({ mobile: false })
        : 
        this.setState({ mobile: true });

        document.querySelector('body').classList.toggle('active');
    }

    removeMobile = () => {
        this.setState({ mobile: false })

        document.querySelector('body').classList.remove('active');
    }

    render() {

        const { mobile } = this.state;

        return (
            <NavBar mobile={ mobile }>

                <IconMenu mobile={ mobile }>
                    {
                        mobile 
                        ?
                            <FaTimes onClick={ this.handleMenu } size={ 40 } color="#fff" />
                        :
                        <MenuHamburguer onClick={ this.handleMenu }>
                            <One></One>
                            <Two></Two>
                            <Three></Three>
                        </MenuHamburguer>
                    }
                </IconMenu>

                <NavElements mobile={ mobile } >
                    <Element  mobile={ mobile } >
                        <Link onClick={ this.removeMobile } spy={ true } offset={ mobile ? 0 : -100 } to="landing" smooth={ true } duration={ 1000 } activeClass="active" >Início</Link>
                    </Element>
    
                    <Element  mobile={ mobile } >
                        <Link onClick={ this.removeMobile } spy={ true } offset={ mobile ? 0 : -100 } to="about" smooth={ true } duration={ 1000 } activeClass="active">Sobre mim</Link>
                    </Element>
    
                    <Element  mobile={ mobile } >
                        <Link onClick={ this.removeMobile } spy={ true } offset={ mobile ? 0 : -100 }  to="projects" smooth={ true } duration={ 1000 } activeClass="active" >Projetos</Link>
                    </Element>

                    <Element  mobile={ mobile } >
                        <Link onClick={ this.removeMobile } spy={ true } offset={ mobile ? 0 : -100 }  to="contact" smooth={ true } duration={ 1000 } activeClass="active" >Contato</Link>
                    </Element>
    
                </NavElements>
            </NavBar>
        )
    }
};
