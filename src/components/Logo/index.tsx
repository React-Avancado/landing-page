import React from 'react'

import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

type Props = {
  logo: {
    url: string
    alternativeText: string
  }
}

const Logo = ({ logo }: Props) => (
  <S.LogoWrapper src={getImageUrl(logo.url)} alt={logo.alternativeText} />
)

export default Logo
