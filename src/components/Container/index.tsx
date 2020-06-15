import React from 'react'

import * as S from './styles'

type ContainerProps = {
  id?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, id }) => (
  <S.Container id={id}>{children}</S.Container>
)

export default Container
