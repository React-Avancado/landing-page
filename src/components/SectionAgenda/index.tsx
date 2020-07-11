import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { SectionAgendaProps } from 'types/api'

import * as S from './styles'

type Props = Omit<SectionAgendaProps, 'pricingBox'>

const SectionAgenda = ({ title, description }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
