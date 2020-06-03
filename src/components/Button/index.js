import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({ children, wide, href, onClick }) => (
  <S.ButtonWrapper href={href} wide={wide} onClick={onClick}>
    {children}
  </S.ButtonWrapper>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
