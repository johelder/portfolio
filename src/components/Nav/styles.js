import styled from 'styled-components';

export const NavBar = styled.nav`
    width: 100%;
    height: 12vh;

    background-color: #121214;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: sticky;
    top: 0;
    z-index: 999;

    ${props => !props.mobile}{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

        height: 100vh;
        justify-content: center;
    }

    @media screen and (min-width: 534px) {
        justify-content: center;

    }
`

export const IconMenu = styled.div`
    width: 4rem;
    height: 4rem;

    margin-right: 2rem;

    ${props => !props.mobile}{
        position: absolute;
        top: 2rem;
        right: 0;
    }

    @media screen and (min-width: 534px) {
        display: none;
    }
`

export const MenuHamburguer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

`
export const One = styled.div`
    width: 80%;
    height: .6rem;
    background-color: #fff;
    border-radius: .2rem;
`
export const Two = styled.div`
    width: 50%;
    height: .6rem;
    background-color: #fff;
    border-radius: .2rem;

    margin-top: .2rem;
`
export const Three = styled.div`
    width: 100%;
    height: .6rem;
    background-color: #fff;
    border-radius: .2rem;

    margin-top: .2rem;
`

export const NavElements = styled.ul`
    display: none;

    ${props => !props.mobile} {
        display: block;
    }

    @media screen and (min-width: 534px) {
        display: flex;
    }
`
export const Element = styled.li`


    ${props => !props.mobile} {
        font-size: 2.4rem;
        font-weight: 500;
        margin: 2.8rem;

        color: #fff;
    }

    @media screen and (min-width: 534px) {
        font-size: 1.6rem;
        color: #fff;

        padding: 1rem;

        cursor: pointer;

        /* &:hover {
            opacity: .7;
        } */

        a.active {
            color: #8357e5;
        }

        &:hover {
            color: #8357e5;
            transition: .2s linear
        }
    }
`
