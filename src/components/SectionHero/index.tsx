import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <Logo />

      <S.Content>
        <S.TextBlock>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOMAR22"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
