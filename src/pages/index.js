import React from 'react'
import Nav from '../components/Nav'
import Landing from '../components/Landing/'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <> 
            <Nav />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default Home