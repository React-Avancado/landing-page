import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { sectionAboutProjectProps } from 'types/api'
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  sectionAboutProject
}: sectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAboutProject.image.url)}
          loading="lazy"
          alt={sectionAboutProject.image.alternativeText}
        />
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text>{sectionAboutProject.description}</S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
