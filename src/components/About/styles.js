import styled from 'styled-components';

export const Container = styled.section.attrs({
    id: 'about'
})`
    height: 90vh;

    background-image: url('https://i.imgur.com/wWkVuB2.png');
    background-size: cover;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
    padding-top: 6rem;
    text-align: center;
`
export const AboutContainer = styled.div`
    width: 80%;
    margin: 8rem auto;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Avatar = styled.img`
    display: none;

    @media screen and (min-width: 1023px) { 
        display: block;

        width: 40rem;

        border-radius: 50%;
        border: 6px solid #8357e5;

        margin-right: 4rem;
    }
`
export const AboutContent = styled.p`
    color: #fff;
    text-align: justify;

    font-size: 1.8rem;
    margin-top: 4rem;

    padding: 2rem 0 2rem 2rem;

    @media screen and (min-width: 374px) {
        margin-top: 0;
        padding-top: 0;
    }
`