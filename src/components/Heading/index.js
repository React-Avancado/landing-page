import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Heading = ({ reverseColor, lineBottom, children }) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

Heading.propTypes = {
  reverseColor: false,
  lineBottom: false
}

Heading.propTypes = {
  reverseColor: PropTypes.bool,
  lineBottom: PropTypes.bool,
  children: PropTypes.string.isRequired
}

export default Heading
