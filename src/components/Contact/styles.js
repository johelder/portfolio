import styled from 'styled-components';

export const Container = styled.section.attrs({
    id: 'contact'
})`
    height: 90vh;

    background-color: #121214;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
    padding-top: 6rem;
    text-align: center;
`
export const Contacts = styled.div`
    width: 80%;
    margin: auto;

    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        margin: 2rem;
        color: #fff;
        font-size: 3rem;

        &:hover {
            color: #8357e5;
            transition: .2s linear
        }
    }
`

export const Github = styled.a.attrs({
    href: 'https://github.com/johelder',
    target: '_blank'
})``

export const Linkedin = styled.a.attrs({
    href: 'https://linkedin.com/in/johelder-humberto-3911731b1',
    target: '_blank'
})``

export const Instagram = styled.a.attrs({
    href: 'https://www.instagram.com/johelder_/',
    target: '_blank'
})``

export const Whatsapp = styled.a.attrs({
    href: 'https://api.whatsapp.com/send?phone=5587988613936&text=Olá%20Johelder!%20Vim%20pelo%20seu%20Portfólio.',
    target: '_blank'
})``

export const Thank = styled.small`
    
    margin-bottom: 1rem;
    color: #eee
`
