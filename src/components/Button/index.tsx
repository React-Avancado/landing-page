import React from 'react'

import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  wide?: boolean
  href: string
  withPrice?: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
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
