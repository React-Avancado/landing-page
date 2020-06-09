import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'

const SectionConcepts = () => (
  <Container>
    <S.Box>
      <Heading lineBottom>Conceitos que você irá aprender</Heading>
      <S.List>
        {content.map((item) => (
          <S.Item key={item}>{item}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
