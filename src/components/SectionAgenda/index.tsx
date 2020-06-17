import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionAgenda = () => (
  <Container id="agenda">
    <Heading reverseColor>Agenda pré-lançamento</Heading>
    <S.Text>
      <p>
        Esse é um curso extremamente vivo, estaremos lançando os módulos
        conforme vamos terminando. Com isso, além de permitir que vocês iniciem
        o curso mais rápido, também irá facilitar que tenhamos um feedback mais
        constante sobre tudo, deixando nosso curso ainda melhor.
      </p>

      <p>
        Para agradecer as pessoas que nos apoiarem desde o início, conforme os
        módulos forem sendo lançados, o desconto vai diminuindo.{' '}
        <strong>
          Ou seja, quanto mais cedo você comprar, mais barato irá pagar
        </strong>
        . Segue a agenda:
      </p>
    </S.Text>
  </Container>
)

export default SectionAgenda
