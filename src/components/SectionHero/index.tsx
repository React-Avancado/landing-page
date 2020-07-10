import React from 'react'

import { gaEvent } from 'utils/ga'
import { LogoProps, HeaderProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import Logo from 'components/Logo'
import Button from 'components/Button'
import Container from 'components/Container'
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = LogoProps & HeaderProps

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo logo={logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
