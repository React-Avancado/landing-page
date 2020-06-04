import React from 'react'

import Container from 'components/Container'
import * as S from './styles'
import Heading from 'components/Heading'

const list = [
  'Boas práticas com ReactJS',
  'Server Side Rendering (SSR)',
  'Static Site Generation (SSG)',
  'Rotas simples e dinâmicas',
  'Static Site Generation (SSG)',
  'Rotas simples e dinâmicas',
  'Boas práticas com ReactJS',
  'Server Side Rendering (SSR)',
  'Static Site Generation (SSG)',
  'Rotas simples e dinâmicas',
  'Static Site Generation (SSG)',
  'Rotas simples e dinâmicas',
  'Boas práticas com ReactJS',
  'Server Side Rendering (SSR)',
  'Static Site Generation (SSG)',
  'Rotas simples e dinâmicas',
  'Static Site Generation (SSG)',
  'Rotas simples e dinâmicas'
]

const SectionConcepts = () => (
  <Container>
    <S.Box>
      <Heading lineBottom>Conceitos que você irá aprender</Heading>
      <S.List>
        {list.map((item) => (
          <S.Item key={item}>{item}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
