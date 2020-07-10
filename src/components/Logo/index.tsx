import React from 'react'

import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ logo }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(logo.url)} alt={logo.alternativeText} />
)

export default Logo
