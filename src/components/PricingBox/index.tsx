import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = () => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$549</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>R$ 79,90</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        Acesso aos <strong>6 módulos</strong>
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Atenção: <strong>suporte finalizado</strong> pelos instrutores
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button
      href="https://www.udemy.com/course/react-avancado/?couponCode=57A9D9C50F35F921463C"
      onClick={onClick}
      withPrice
    >
      <p>Comprar o curso</p>
      <div>
        <S.ButtonDiscountPrice>R$79,90</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
