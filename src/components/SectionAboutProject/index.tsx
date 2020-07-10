import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { sectionAboutProps } from 'types/api'
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({ sectionAbout }: sectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAbout.image.url)}
          loading="lazy"
          alt={sectionAbout.image.alternativeText}
        />
        <div>
          <Heading>{sectionAbout.title}</Heading>
          <S.Text>{sectionAbout.description}</S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
