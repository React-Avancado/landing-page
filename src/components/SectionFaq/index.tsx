import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { SectionFaqProps } from 'types/api'

import * as S from './styles'

const SectionFaq = ({ title, questions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://willianjusten.com/about"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>{' '}
            ou entrar no{' '}
            <a
              href="https://slack-willianjusten.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              slack do nosso curso.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
