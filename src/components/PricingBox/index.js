import React from 'react'

import Newsletter from 'components/Newsletter'

import * as S from './styles'

// Descomentar após o lançamento e remover a Newsletter!
// import Button from 'components/Button'
// import { event } from 'utils/ga'
// const onClick = () => event('click', 'cta', 'pricing box button')

const PricingBox = () => (
  <S.Box>
    <S.Ribbon>50% desconto</S.Ribbon>
    <S.Prices>
      <S.FullPrice>
        De <span>R$579</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>6x de</span> R$48
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        Acesso aos <strong>6 módulos</strong> assim que lançados
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com os instrutores via Slack
      </S.BenefitsItem>

      <S.BenefitsItem>
        <strong>Lives exclusivas</strong> durante o curso
      </S.BenefitsItem>
    </S.BenefitsList>

    {/* Descomentar após o lançamento! Não esqueça de editar a url! */}
    {/* <Button href="#" onClick={onClick} withPrice>
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R$579</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$279</S.ButtonDiscountPrice>
      </div>
    </Button> */}

    <Newsletter />
  </S.Box>
)

export default PricingBox
