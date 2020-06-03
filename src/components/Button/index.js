import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({ children }) => <S.ButtonWrapper>{children}</S.ButtonWrapper>

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
