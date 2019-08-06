import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import {Link, graphql, useStaticQuery} from 'gatsby'
import {css} from '@emotion/core'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { draft: { eq: false } } }
                sort: {fields: [frontmatter___date], order: DESC}
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Projects"/>
            <h1 css={css`color: #383838;`}>Projects.</h1>
            <ol css={css`list-style-type: none; margin: 0;`}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li css={css`
                            margin: 1rem 0;
                            a {
                                background: #dbc695;
                                color: #000000;
                                display: block;
                                padding: 0.8rem 3rem;
                                text-decoration: none;
                            }
                            a:hover {
                                background: #B79D60;
                            }
                            h2 {
                                margin-bottom: 0;
                            }
                            p {
                                color: #777777;
                                font-size: .8rem;
                                font-style: italic;
                            }
                        `}>
                            <Link to={`/projects/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ProjectsPage