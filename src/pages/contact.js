import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/core'
const ContactPage = (props) => {
    return (
        <Layout>
            <Head title="Contact Me."/>
            <h1 css={css`color: #383838;`}>Contact Me.</h1>
            <p><a href="mailto:abeherham@knights.ucf.com"><Img fixed={props.data.OutlookLogo.childImageSharp.fixed} /></a></p>

            <div>
                <ul css={css`
                    display: flex; 
                    justif-self: center;
                    margin: 0;
                    padding: 0;
                    float: left; 
                    list-style-type: none;
                    li {
                        margin-right: 1.2rem;    
                    }
                    flex-wrap: wrap;
                        `}
                >
                    <li><a href="https://github.com/abeherham"><Img fixed={props.data.GitHubLogo.childImageSharp.fixed} /></a></li>
                    <li><a href="https://linkedin.com/in/abeher"><Img fixed={props.data.LinkedInLogo.childImageSharp.fixed} /></a></li>
                </ul>
            </div>
        </Layout>
    )
}
export default ContactPage

export const pageQuery = graphql`
    query { 
        GitHubLogo: file(relativePath: { eq: "GitHub_Logo.png" }) {
            childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        LinkedInLogo: file(relativePath: { eq: "LinkedIn_Logo.png" }) {
            childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        OutlookLogo: file(relativePath: { eq: "Outlook-logo.png" }) {
            childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `