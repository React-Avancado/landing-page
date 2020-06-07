import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import faq from './content'
import * as S from './styles'

const SectionFaq = () => (
  <S.Wrapper>
    <Container>
      <Heading>FAQ</Heading>

      <S.Content>
        {faq.map(({ question, answer }) => (
          <div>
            <Heading lineBottom>{question}</Heading>
            <p>{answer}</p>
          </div>
        ))}
      </S.Content>

      <S.ExtraQuestion>
        <Heading lineBottom>Eu tenho outra dúvida!</Heading>
        <p>
          Sem problemas! Você pode acessar qualquer uma das{' '}
          <a href="https://willianjusten.com/about" target="_blank">
            minhas redes sociais
          </a>{' '}
          ou entrar no{' '}
          <a href="https://slack-willianjusten.herokuapp.com/" target="_blank">
            slack do nosso curso.
          </a>
        </p>
      </S.ExtraQuestion>
    </Container>
  </S.Wrapper>
)

export default SectionFaq
