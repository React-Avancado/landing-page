import React, { createRef } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import ShareButtons from 'components/ShareButtons'

import * as S from './styles'

const url =
  'https://willianjusten.us14.list-manage.com/subscribe/post?u=4697443522f6e465b6cf0d979&amp;id=02f1ff1c87'

const Newsletter = () => {
  const emailRef = createRef(undefined)

  return (
    <div>
      <S.Text>Deseja receber um aviso quando lançar?</S.Text>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => {
          switch (status) {
            case 'sending':
              return <S.Thanks>Enviando...</S.Thanks>
            case 'success':
              return (
                <S.Thanks>
                  ✔️ Prontinho! Agora é só confirmar sua inscrição no email que
                  você vai receber em instantes.
                  <ShareButtons />
                </S.Thanks>
              )
            case 'error':
              return (
                <S.Thanks
                  dangerouslySetInnerHTML={{
                    __html: `❌ Ops, algum erro aconteceu...`
                  }}
                />
              )
            default:
              return (
                <S.Form
                  onSubmit={(event) => {
                    event.preventDefault()

                    subscribe({
                      EMAIL: emailRef.current.value
                    })
                  }}
                >
                  <div>
                    <S.Label htmlFor="email">E-mail:</S.Label>
                    <input
                      id="email"
                      type="email"
                      ref={emailRef}
                      required
                      placeholder="quero@evoluir.dev"
                    />
                  </div>
                  <button type="submit">Me avise!</button>
                </S.Form>
              )
          }
        }}
      />
    </div>
  )
}

export default Newsletter
