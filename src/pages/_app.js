import React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import GlobalStyle from './global.styles'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Simple NextJS Quick Start</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000" />
          <link rel="shortcut icon" href="/icon-512.png" />
          <link rel="apple-touch-icon" href="/icon-512.png" />
          <meta
            name="description"
            content="A simple project starter to work with React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
