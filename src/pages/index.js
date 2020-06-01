import React from 'react'
import PropTypes from 'prop-types'
import Main from '../components/Main'

const Index = ({ deps }) => <Main deps={deps} />

Index.propTypes = {
  deps: PropTypes.object.isRequired
}

Index.getInitialProps = () => {
  const packageJson = require('../../package.json')
  const deps = packageJson.dependencies
  return { deps }
}

export default Index
