import styled, { keyframes } from 'styled-components';

export const Container = styled.section.attrs({
    id: 'landing'
})`
    height: 90vh;

    background-color: #121214;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;

        position: absolute;
        bottom: 0;
    }

    @media screen and (min-width: 534px) {

        background-image: url('https://i.imgur.com/GW1i8eY.png');
        background-size: cover;
        background-position: center;

        img {
            display: none;
        }
    }

    @media screen and (min-width: 534px) { 
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const Apresentation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 6rem; /** alinhar ao centro */

    @media screen and (min-width: 534px) { 
        grid-column: 1/2;
        align-self: flex-start;

        margin-top: 14rem;
    }
 

`
export const Name = styled.h1`
    font-size: 2.6rem;
    color: #fff;

    font-weight: 600;
    line-height: 5.2rem;

    @media screen and (min-width: 1023px) { 
        font-size: 3.6rem;
    }
`
export const Dev = styled.h2`
    font-size: 1.8rem;
    color: #fff;
    
    font-weight: 300;
    line-height: 3.4rem;

    @media screen and (min-width: 1023px) { 
        font-size: 2.4rem;
    }
`
export const Button = styled.a.attrs({
    href: 'https://github.com/johelder',
    target: '_blank'
})`
    display: flex;
    align-items: center;

    background-color: #8357e5;

    border-radius: .5rem;

    padding: .6rem;
    margin-top: 1rem;

    &:hover {
        opacity: .8;
        transition: .2s linear;
    }

    svg {
        font-size: 2rem;
        margin-right: .8rem;

        color: #fff;
    }

    @media screen and (min-width: 1023px) { 
        svg {
            font-size: 3.2rem;
        }
    }
`
export const Github = styled.span`
    font-size: 1.4rem;
    color: #fff;

    font-weight: 500;

    @media screen and (min-width: 1023px) { 
        font-size: 2rem;
    }

`
const expansion = keyframes`
    0%{ bottom: 2rem }
    50%{ bottom: 1rem }
    100%{ bottom: 2rem }
`

export const ArrowDown = styled.div`

    position: absolute;
    bottom: 2rem;
    cursor: pointer;
    z-index: 1;

    font-size: 4rem;
    color: #fff;

    animation: ${ expansion } 1.2s infinite linear;

    @media screen and (min-width: 534px) { 
        grid-column: 1/3;
        
        right: 50%;
    }

    &:hover {
        color: #8357e5;
        transition: .2s linear
    }
`

const fireExpansion = keyframes`
    0%{ width: 4rem; }
    50%{ width: 5rem; }
    100%{ width: 4rem; }
`

export const RocketContainer = styled.div`
    
    display: none;

    @media screen and (min-width: 534px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-column: 2/3;
    }
`
export const RocketImg = styled.div`
    @media screen and (min-width: 534px) {
        height: 100%;
        
        img {
            display: block;
            width: 20rem;
            position: initial;
            align-self: flex-start;
        }
    }

    @media screen and (min-width: 1023px) { 
        img {
            width: 24rem;
        }
    }
`
export const FireImg = styled.div`

    @media screen and (min-width: 534px) {
        height: 100%;

        img {
            display: block;
            width: 4rem;
            position: initial;
            transform: rotate(180deg);

            animation: ${ fireExpansion } 1.2s infinite linear;
        }
    }
`