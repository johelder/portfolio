import styled from 'styled-components';

export const Container = styled.section.attrs({
    id: 'projects'
})`
    width: 100%;

    background-image: url('https://i.imgur.com/wWkVuB2.png');
    background-size: cover;

    margin-top: -.1rem; /** retirar espaço em branco entre as sections */
`

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
    padding-top: 6rem;
    text-align: center;
`

export const Repositories = styled.ul`
    display: grid;
    height: 100%;
    width: 80%;
    margin: 0rem auto;

    padding: 8rem 0;

    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 2rem;
`
export const Repo = styled.li`
    color: #fff;
    background-color: #212025;
    height: 100%;

    border-radius: .5rem;

    &:hover {
        transform: translateY(-5%);
        transition: .2s linear;

        border: 1px solid #8357e5;
    }
`
export const RepoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RepoName = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 2rem;
`
export const RepoDescription = styled.p`
    font-size: 1.4rem;

    background-color: #19181C;
    width: 100%;

    padding: 2rem;
    
`
export const RepoStars = styled.div`
    display: flex;
    align-items: center;

    margin: 1rem;

    font-size: 1.2rem;

    svg {
        margin-right: 1rem;
        color: #8357e5;
    }
`
export const SeeMoreButton = styled.div`
    width: 100%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const SeeMore = styled.a.attrs(props => ({
    href: props.pag,
    target: '_blank'
}))`
    background-color: #8357e5;
    padding: .6rem 1rem;
    font-weight: 500;
    border-radius: 2rem;
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    color: #fff;

    svg {
        font-size: 1.2rem;
        margin-left: 1rem;
    }
`

export const LoadingScreen = styled.div``
