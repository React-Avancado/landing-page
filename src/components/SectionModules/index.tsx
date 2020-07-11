import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import { SectionModulesProps } from 'types/api'

import * as S from './styles'

const SectionModules = ({ title, modules }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map((item) => (
        <CardModule
          key={item.title}
          title={item.title}
          subTitle={item.subtitle}
        >
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
