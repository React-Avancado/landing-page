import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.texts};
    padding: ${theme.spacings.medium} 0;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xlarge} 0;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      grid-column-gap: ${theme.spacings.medium};
      grid-row-gap: ${theme.spacings.large};
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`

export const ExtraQuestion = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    a {
      border-bottom: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      text-decoration: none;
    }

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`
