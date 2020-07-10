import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { SectionConceptsProps } from 'types/api'
import * as S from './styles'

const SectionConcepts = ({ sectionConcepts }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts.title}</Heading>
      <S.List>
        {sectionConcepts.concept.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
