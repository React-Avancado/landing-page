import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  wide?: boolean
  href: string
  withPrice?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  children,
  wide,
  withPrice,
  href,
  onClick
}) => (
  <S.ButtonWrapper
    href={href}
    wide={wide}
    withPrice={withPrice}
    onClick={onClick}
  >
    {children}
  </S.ButtonWrapper>
)

export default Button
