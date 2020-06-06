import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Text = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      grid-gap: ${theme.spacings.medium};
    `}

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
