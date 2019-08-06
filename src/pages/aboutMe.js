import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import {css} from '@emotion/core'

const AboutMePage = () => {
    return (
        <Layout>
            <Head title="About Me"/>
            <h1 css={css`color: #383838;`}>About Me.</h1>
            <p css={css`text-indent: 1.2rem; line-height: 2;`}>Before attending the University of Central Florida where I am currently studying 
                                                             computer science, I was studying computer networking at Atlantic Technical College 
                                                             & High School. It was here that I also took my first computer science courses and began 
                                                             to enjoy solving coding problems and working on my coding projects. It was safe to say 
                                                             that I knew what I wanted to major in. Shortly after graduation, I began to work on even
                                                             more personal projects to learn as much as I could before I had even taken my first college 
                                                             class. I also began to work on more complicated coding problems that required me to learn and 
                                                             implement data structures (ex. LinkedList and HashMap) that I had no previous knowledge of before. 
                                                             Once it was time to begin fall classes I was excited not just to see how much I could learn in a
                                                             short amount of time, but also to join the CS community on campus through clubs and organizations, 
                                                             specifically our school’s international collegiate programming team and our Association for Computing
                                                             Machinery (ACM) club.</p>
            <hr />
        </Layout>
    )
}

export default AboutMePage