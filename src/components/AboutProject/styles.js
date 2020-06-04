import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const AboutProjectWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    transform: skewY(2deg);
    padding: ${theme.spacings.xlarge} 0;
  `}
`

export const AboutProjectContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    transform: skewY(-2deg);

    ${media.greaterThan('large')`
      flex-direction: row;
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const AboutProjectBlock = styled.div`
  ${({ theme }) => css`
    flex: 1;

    ${media.greaterThan('large')`
      &:last-child {
        padding-left: ${theme.spacings.xlarge};
      }
    `}
  `}
`

export const AboutProjectImage = styled.img`
  ${({ theme }) => css`
    display: flex;
    max-width: min(60rem, 100%);
    margin: 0 auto ${theme.spacings.small};

    ${media.greaterThan('large')`
      margin: 0 auto;
    `}
  `}
`

export const AboutProjetText = styled.div`
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
