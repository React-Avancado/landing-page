import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Container = ({ children, id }) => (
  <S.Container id={id}>{children}</S.Container>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
}

export default Container
