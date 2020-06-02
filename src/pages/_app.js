import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

import GlobalStyle from './global.styles'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.
        </title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="canonical" href="https://reactavancado.com.br/" />
        <meta
          name="title"
          content="React Avançado - Crie aplicações reais com NextJS, GraphQL e mais."
        />
        <meta
          name="description"
          content="Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
        />

        {/* Facebook. Linkedin, others */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reactavancado.com.br" />
        <meta
          property="og:title"
          content="React Avançado - Crie aplicações reais com NextJS, GraphQL e mais."
        />
        <meta
          property="og:description"
          content="Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
        />
        <meta
          property="og:image"
          content="https://reactavancado.com.br/img/cover.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reactavancado.com.br" />
        <meta
          property="twitter:title"
          content="React Avançado - Crie aplicações reais com NextJS, GraphQL e mais."
        />
        <meta
          property="twitter:description"
          content="Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
        />
        <meta
          property="twitter:image"
          content="https://reactavancado.com.br/img/cover.png"
        />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

export default App
