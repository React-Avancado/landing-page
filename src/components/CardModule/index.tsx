import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  subTitle: string
  children: React.ReactNode
}

const CardModule: React.FC<Props> = ({ title, subTitle, children }) => (
  <S.Card>
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.TitleWrapper>

    <S.Content>{children}</S.Content>
  </S.Card>
)

export default CardModule
