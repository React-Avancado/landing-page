import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    transform: skewY(2deg);
    padding: ${theme.spacings.xlarge} 0;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.medium};
    transform: skewY(-2deg);

    ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr;
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const Image = styled.picture`
  img {
    ${({ theme }) => css`
      display: block;
      max-width: min(60rem, 100%);
      margin: 0 auto ${theme.spacings.small};

      ${media.greaterThan('large')`
        margin: 0 auto;
      `}
    `}
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    p {
      color: ${theme.colors.texts};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
