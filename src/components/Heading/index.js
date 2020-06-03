import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Heading = ({ color = 'white', children }) => (
  <S.HeadingWrapper color={color}>{children}</S.HeadingWrapper>
)

Heading.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default Heading
