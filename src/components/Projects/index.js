import React, { Component } from 'react';
import axios from 'axios'
import { FaLongArrowAltRight, FaSpinner, FaStar } from 'react-icons/fa'
import { Container, Title, Repositories, Repo, RepoHeader, RepoName, RepoDescription, SeeMoreButton, SeeMore, LoadingScreen, RepoStars } from './styles';

export default class Projects extends Component{
    
    state = {
        repositories: [],
    }

    async componentDidMount() {

        this.setState({ loading: true })

        const response = await axios.get('https://api.github.com/users/johelder/repos');

        const data = response.data.filter(repository => repository.name !== 'johelder')

        this.setState({ repositories: data, loading: false });
    }

    render() {
        
        const { repositories } = this.state;

        return (

            <Container>

                <Title>Projetos</Title>

                <Repositories>
                    { repositories.map(repository => (
                        <Repo key={ repository.id }>
                            <RepoHeader>
                                <RepoName>{ repository.name }</RepoName>
                                <RepoStars>
                                    <FaStar />
                                    { repository.watchers }
                                </RepoStars>
                            </RepoHeader>
                            <RepoDescription>{ repository.description }</RepoDescription>
                            <SeeMoreButton>
                                <SeeMore pag={ repository.html_url } >
                                    Ver mais
                                    <FaLongArrowAltRight />  
                                </SeeMore>
                            </SeeMoreButton>
                        </Repo>
                    )) }
                </Repositories>
            </Container>
        )
    }
};
