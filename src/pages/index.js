import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/core'

const IndexPage = (props) => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1 css={css`color: #383838;`}>My Portfolio.</h1>
            <p>Welcome, my name is Abraham Hernandez and I'm currently a Freshman at the University of Central Florida were I am studying computer science.</p>
            <div css={css`padding: 20px 0;`}>
              <Img css={css`margin-right: 2.2rem; border-radius: 50%;`} fixed={props.data.avatar.childImageSharp.fixed} />
              <Img css={css``}fixed={props.data.banner.childImageSharp.fixed} />
            </div>
            <h4>Classes that I have taken or are taking this year:</h4>
            <ul>
              <li>Introduction to Programming with C</li>
              <li>Computer Science 1</li>
              <li>Introduction to Discrete Structures</li>
            </ul>
            <p>Here you can learn more about myself, find all of my projects, and view my contact information.</p>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query { 
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        banner: file(relativePath: { eq: "banner.png" }) {
          childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      }
    `
