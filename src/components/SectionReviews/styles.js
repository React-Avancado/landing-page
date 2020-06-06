import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: ${theme.spacings.small};
    grid-row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
    `}
  `}
`
