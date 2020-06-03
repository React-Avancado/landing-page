import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

const Hero = () => (
  <S.HeroWrapper>
    <Logo />

    <S.HeroContainer>
      <S.HeroTextBlock>
        <S.HeroTitle>React Avançado</S.HeroTitle>
        <S.HeroDescription>
          Crie aplicações reais com NextJS, GraphQL e mais!
        </S.HeroDescription>
        <Button>Garantir minha vaga</Button>
      </S.HeroTextBlock>

      <S.HeroImage
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor em frente ao computador"
      />
    </S.HeroContainer>
  </S.HeroWrapper>
)

export default Hero
