import React from 'react'
import Heading from 'components/Heading'

import icons from './content'
import * as S from './styles'

const TechSection = () => (
  <S.TechSectionWrapper>
    <Heading>Tecnologias utilizadas</Heading>
    <S.TechIconsContainer>
      {icons.map(({ name, image, index }) => (
        <S.TechIcon key={index}>
          <S.TechIcons src={`img/tech/${image}`} alt={name} />
          <S.TechIconsName>{name}</S.TechIconsName>
        </S.TechIcon>
      ))}
    </S.TechIconsContainer>
  </S.TechSectionWrapper>
)

export default TechSection
