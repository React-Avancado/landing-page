import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const CardModule = ({ title, subTitle, children }) => (
  <S.Card>
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.TitleWrapper>

    <S.Content>{children}</S.Content>
  </S.Card>
)

CardModule.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default CardModule
