import React from 'react'

import Heading from 'components/Heading'
import * as S from './styles'

const AboutProject = () => (
  <S.AboutProjectWrapper>
    <S.AboutProjectContainer>
      <S.AboutProjectBlock>
        <S.AboutProjectImage
          src="/img/project.png"
          alt="2 telas sobrepostas, na frente a interface do ecommerce e atrás o CMS"
        />
      </S.AboutProjectBlock>
      <S.AboutProjectBlock>
        <Heading color="black">O que iremos construir</Heading>
        <S.AboutProjetText>
          <p>
            Iremos criar um e-commerce de jogos completo, incluindo toda a parte
            de pagamentos e área do client. Os usuário poderão buscar, filtrar,
            adicionar ao carrinho e comprar seus jogos favoritos.
          </p>

          <p>
            Teremos também um <strong>CMS completamente customizado</strong>{' '}
            para que os administradores possam adicionar produtos, categorias,
            plataformas, criar promoções, editar partes do site, além de emails
            automatizados para as vendas de cada produto.
          </p>

          <p>
            Para criar tudo isso, iremos utilizar ferramentas muito utilizadas
            no mercado como ReactJS, Next, Apollo e outras coisas mais. Sempre
            prezando a qualidade do código e obviamente, teremos{' '}
            <strong>testes em tudo!</strong>
          </p>
        </S.AboutProjetText>
      </S.AboutProjectBlock>
    </S.AboutProjectContainer>
  </S.AboutProjectWrapper>
)

export default AboutProject
