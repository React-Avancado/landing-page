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
        De <span>R$415</span> por apenas
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

    <Button
      href="https://www.udemy.com/course/react-avancado/?couponCode=MODULO1"
      onClick={onClick}
      withPrice
    >
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R$415</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$289</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
