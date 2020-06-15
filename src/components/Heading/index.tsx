import React from 'react'

import * as S from './styles'

export type HeadingProps = {
  reverseColor?: boolean
  lineBottom?: boolean
  children: string
}

const Heading: React.FC<HeadingProps> = ({
  reverseColor = false,
  lineBottom = false,
  children
}) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
