import React from 'react'
import Heading from 'components/Heading'

import icons from './content'
import * as S from './styles'
import Container from 'components/Container'

const TechSection = () => (
  <S.TechSectionWrapper>
    <Container>
      <Heading reverseColor>Tecnologias utilizadas</Heading>
      <S.TechIconsContainer>
        {icons.map(({ name, image, index }) => (
          <S.TechIcon key={index}>
            <S.TechIcons src={`img/tech/${image}`} alt={name} />
            <S.TechIconsName>{name}</S.TechIconsName>
          </S.TechIcon>
        ))}
      </S.TechIconsContainer>
    </Container>
  </S.TechSectionWrapper>
)

export default TechSection
