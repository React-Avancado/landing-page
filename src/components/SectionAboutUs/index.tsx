import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import { SectionAboutUsProps } from 'types/api'

import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((item) => (
        <ProfileCard
          key={item.name}
          name={item.name}
          role={item.title}
          image={item.photo.url}
          socialNetwork={item.socialNetwork.map(({ url, title }) => ({
            slug: title.toLowerCase(),
            link: url
          }))}
          description={item.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
