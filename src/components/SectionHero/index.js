import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { event } from 'utils/ga'
import Container from 'components/Container'

const onClick = () => event('click', 'cta', 'hero button')

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <Logo />

      <S.Content>
        <S.TextBlock>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, GraphQL e mais!
          </S.Description>
          <S.ButtonWrapper>
            <Button href="#" onClick={onClick} wide>
              Garantir minha vaga
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor em frente ao computador"
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
