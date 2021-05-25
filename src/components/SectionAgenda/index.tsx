import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionAgenda = () => (
  <Container id="agenda">
    <Heading reverseColor>Curso 100% completo!</Heading>
    <S.Text>
      <p>
        Todos os módulos do curso <strong>já foram lançados</strong>! E você
        pode assistir todos no seu tempo, pois o acesso é vitalício.
      </p>

      <p>
        Os módulos podem ser feitos em ordem ou você pode assistir conforme sua
        necessidade.
      </p>
    </S.Text>
  </Container>
)

export default SectionAgenda
