import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'

const SectionTech = () => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>Tecnologias utilizadas</Heading>
      <S.IconsContainer>
        {icons.map(({ name, image }) => (
          <S.Icon key={name}>
            <S.Icons src={`img/tech/${image}`} alt={name} loading="lazy" />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
