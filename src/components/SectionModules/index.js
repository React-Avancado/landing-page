import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'

const SectionModules = () => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>Módulos deste curso</Heading>

      <S.Content>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CardModule
            key={item}
            title={`Módulo ${item}`}
            subTitle="Introdução e Arquitetura do projeto"
          >
            <p>
              Iremos conhecer a Stack utilizada no curso, tendo explicação de
              cada uma das escolhas, assim como mostrando seus prós/contras e
              até outras opções.
            </p>
            <p>
              Também iremos construir nosso boilerplate do zero, aprendendo a
              configurar as ferramentas de qualidade de código, como eslint,
              prettier, typescript. Assim como configurar o Next SSR e SSG,
              Apollo e mais.
            </p>
          </CardModule>
        ))}
      </S.Content>
    </Container>
  </S.Wrapper>
)

SectionModules.defaultProps = {}

SectionModules.propTypes = {}

export default SectionModules
