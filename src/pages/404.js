import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import {css} from '@emotion/core'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Error 404"/>
            <h1 css={css`text-decoration: underline; color: #383838;`}>Page not found.</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound